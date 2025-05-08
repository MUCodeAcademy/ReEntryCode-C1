# This is the main file that controls how the bot behaves and functions.

# Importing the necessary libraries.
import openai
import os
from dotenv import load_dotenv

from google.cloud import texttospeech

from botbuilder.core import ActivityHandler, TurnContext, ConversationState, UserState
from botbuilder.schema import ChannelAccount, Activity, ActivityTypes

from .user_profile import UserProfile
from .conversation_data import ConversationData
from .welcome_user_state import WelcomeUserState

# Setting up the environment variables and the OpenAI client, as well as the text-to-speech client.
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
client = openai.Client(api_key=openai_api_key)
speech_client = texttospeech.TextToSpeechClient()

class PennyBot(ActivityHandler):
    # This will initialize the bot and set up the conversation state and user state.
    def __init__(self, conversation_state: ConversationState, user_state: UserState):
        self.websocket = None
        self.latest_response = ""
        if conversation_state is None:
            raise TypeError("[PennyBot]: Missing parameter. conversation_state is required but None was given")
        if user_state is None:
            raise TypeError("[PennyBot]: Missing parameter. user_state is required but None was given")
    
        self.conversation_state = conversation_state
        self.user_state = user_state

        self.conversation_data_accessor = self.conversation_state.create_property("ConversationData")
        self.user_profile_accessor = self.user_state.create_property("UserProfile")
        self.user_state_accessor = self.user_state.create_property("WelcomeUserState")

        self.WELCOME_MESSAGE = """Hi! My name is Penny! What's your name?"""
            
    # Function for converting text to speech.
    def text_to_speech(self, text, file_name, voice_name="en-US-Journey-F"):
        synthesis_input = texttospeech.SynthesisInput(text=text)

        voice = texttospeech.VoiceSelectionParams(
            language_code="en-US",
            name=voice_name
        )

        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )

        response = speech_client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )

        # This writes the bot response to an mp3 file, which can then be played in the browser
        with open(file_name, "wb") as out:
            out.write(response.audio_content)
            print(f'Audio content written to file "{file_name}"')

    # When the user sends a message to the bot, this function will generate a response.
    async def on_message_activity(self, turn_context: TurnContext):
        user_input = turn_context.activity.text

        # This sets up messages for the OpenAI API.
        # Whatever you write for the system prompt will be the personality of the bot.
        # I told 'Penny' to be highly skilled, casual, and nonchalant.
        # I wrote 'remember to be casual' to ensure the bot stays casual. This is a good technique if you want to keep the bot's personality consistent.
        # I only wrote a few instructions, but you can write a lot more.
        # There is, depending on the model, a maximum of how many tokens you can add for the instructions.
        messages = [
            {"role": "system", "content": """
                    You are an assistant named Penny who is a highly skilled programmer.
                    You are very casual and nonchalant.
                    Remember to be casual.
                    Try to keep your responses to a couple sentences, unless you're giving detailed instructions.
             """},
            {"role": "user", "content": user_input}
        ]
        try:
            # Try to generate a response using the OpenAI API.
            print("Trying to generate response.")
            completion = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=messages,
            )
            # Extracting the bot's message from the OpenAI API.
            assistant_message = completion.choices[0].message
            print("Assistant message: ", assistant_message)

            # If the bot's message exists and has content, then set the response text to the bot's message.
            if assistant_message and assistant_message.content:
                response_text = assistant_message.content
                self.latest_response = response_text
                if self.websocket:
                    # Send the response text to the websocket.
                    await self.websocket.send_text(response_text)

                # Generate and save the audio file as response.mp3
                audio_file_name = "response.mp3"
                self.text_to_speech(response_text, audio_file_name)
        except openai.OpenAIError as e:
            print("Got an error: ", e)

    # This function will return the latest response from the OpenAI API.
    def get_response_message(self):
        return self.latest_response

    # This function will be called when a new member is added to the conversation.
    async def on_members_added_activity(
        self,
        members_added: ChannelAccount,
        turn_context: TurnContext
    ):
        # This gets the user profile and conversation data.
        user_profile = await self.user_profile_accessor.get(turn_context, UserProfile)
        conversation_data = await self.conversation_data_accessor.get(turn_context, ConversationData)
        # If the user doesn't have a name, then prompt them for their name.
        if user_profile.name is None:
            # If the user has already been prompted for their name, then set the user's name to the text from the user's message.
            if conversation_data.prompted_for_user_name:
                user_profile.name = turn_context.activity.text

                # Send a message to the user.
                await turn_context.send_activity(
                    f"Nice to meet you { user_profile.name }. Ask me anything."
                )

                # Set the prompted_for_user_name to False.
                conversation_data.prompted_for_user_name = False
            else: 
                # Send the standard welcome message to the user to prompt them for their name.
                await turn_context.send_activity(
                    self.WELCOME_MESSAGE
                )

                # Set the prompted_for_user_name to True.
                conversation_data.prompted_for_user_name = True

    # This function will be called when a turn is completed (either the user or the bot sent a message).
    async def on_turn(self, turn_context: TurnContext):
        await super().on_turn(turn_context)

        # Save the conversation state and user state.
        await self.conversation_state.save_changes(turn_context)
        await self.user_state.save_changes(turn_context)
