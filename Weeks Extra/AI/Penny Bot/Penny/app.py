# This is the starting file file for the Penny Bot.
# It's mostly just setting up error handling and starting the actual bot in bot.py

# Importing the necessary libraries.
import sys
import traceback
from datetime import datetime
from fastapi import FastAPI, Request, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from botbuilder.core import (
    BotFrameworkAdapterSettings,
    BotFrameworkAdapter,
    ConversationState,
    UserState,
    MemoryStorage,
    TurnContext
)
from botbuilder.schema import Activity, ActivityTypes, ConversationAccount
from .bot import PennyBot
from .config import DefaultConfig

# This gets the configuration for the bot from the config.py file (like the port number, app ID, and app password).
CONFIG = DefaultConfig()

# This gets the settings for the bot from the configuration.
SETTINGS = BotFrameworkAdapterSettings(CONFIG.APP_ID, CONFIG.APP_PASSWORD)
ADAPTER = BotFrameworkAdapter(SETTINGS)

# Error handling.
async def on_error(context: TurnContext, error: Exception):
    print(f"\n [on_turn_error] unhandled error: {error}", file=sys.stderr)
    traceback.print_exc() 

    # Sends a message to the user if the bot encounters an error.
    await context.send_activity("The bot encountered an error or bug.")
    await context.send_activity(
        "To continue to run this bot, please fix the bot source code."
    )

    # If the bot is running in the emulator, it will send a trace activity (which is just an error message for bot framework).
    if context.activity.channel_id == "emulator":
        trace_activity = Activity(
            label="TurnError",
            name="on_turn_error Trace",
            timestamp=datetime.now(datetime.timezone.utc),
            type=ActivityTypes.trace,
            value=f"{error}",
            value_type="https://www.botframework.com/schemas/error",
        )
        await context.send_activity(trace_activity)

ADAPTER.on_turn_error = on_error

# This gets the memory storage for the bot (like the conversation state and user state).
MEMORY = MemoryStorage()

# This gets the user state for the bot from the memory storage.
USER_STATE = UserState(MEMORY)

# This gets the conversation state for the bot from the memory storage.
CONVERSATION_STATE = ConversationState(MEMORY)

# Starts the bot.
BOT = PennyBot(CONVERSATION_STATE, USER_STATE)

# Starts the FastAPI app.
app = FastAPI()

# This adds CORS middleware to the app, which allows the bot to be accessed from the frontend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3978"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This starts the websocket endpoint for the bot which will wait for messages from the frontend.
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text: {data}")

# This is the endpoint for the bot that the frontend will call.
# It's used to send and receive messages from the frontend.
@app.post('/api/messages')
async def messages(req: Request):
    if req.headers['content-type'] == 'application/json':
        body = await req.json()
    else:
        return JSONResponse({'error': 'Invalid Content Type'}, status_code=415)
    
    activity = Activity().deserialize(body)
    activity.service_url = "http://localhost:3978"
    if not activity.conversation:
        activity.conversation = ConversationAccount(id="some-conversation-id")
    auth_header = req.headers.get('authorization')

    await ADAPTER.process_activity(activity, auth_header, BOT.on_turn)

    # This gets the response from the bot.
    chat_response = BOT.get_response_message()

    # This sends the response to the frontend.
    if chat_response:
        return JSONResponse({'message': chat_response})
    else:
        return JSONResponse({'message': 'No response generated'})
    
# This runs the app.
if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=CONFIG.PORT)
