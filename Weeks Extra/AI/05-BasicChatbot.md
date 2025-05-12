# Building a Bot

For our purposes, we're going to build a simple bot using Python and pure JavaScript.

For you to build this on your own, you're going to need to install Python first: <https://www.python.org>

You're also going to need to sign up for an OpenAI API key <https://platform.openai.com/api-keys>

You can use other LLMs like Gemini, but you'll need an API key from whichever one you want to use.
(You could also download and run models locally, but that requires a lot of computational power and is not practical for most people.)

## Set Up the Python Back-end

1. **Create project directory**  

   ```bash
   mkdir chatbot
   cd chatbot
   ```

2. **Create and activate a virtual environment**  

    A virtual environment is an isolated workspace for our project.

   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # macOS / Linux
   source venv/bin/activate
   ```

3. **Install dependencies**  

    We're going to need these libraries for our chatbot. pip is the main package manager for Python.

   ```bash
   pip install flask openai python-dotenv
   ```

4. **Store your API key**  

   Create a file named `.env` in the project root:

   Once you've signed up for an API key from OpenAI (or whichever model you want to use), put it in the .env file like this:

   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

5. **Write `app.py`**  

   ```python
   # in app.py
   import os
   from flask import Flask, request, jsonify
   from dotenv import load_dotenv
   import openai

   load_dotenv()

   openai.api_key = os.getenv("OPENAI_API_KEY") # loads OPENAI_API_KEY from .env

   app = Flask(__name__)

   # Sets up a /chat endpoint that our front-end will use to send messages to
   @app.route("/chat", methods=["POST"])
   def chat():
       data = request.get_json()
       user_message = data.get("message", "")
       if not user_message:
           return jsonify({"error": "No message provided"}), 400

       # Call OpenAI Chat API
       response = openai.ChatCompletion.create(
           model="gpt-3.5-turbo", # Use whatever model you want to here
           messages=[{"role": "user", "content": user_message}]
       )

       ai_message = response.choices[0].message.content
       return jsonify({"reply": ai_message})

   if __name__ == "__main__":
       app.run(debug=True, port=5000)
   ```

6. **Run the server**  

   ```bash
   python app.py
   ```

   The API is now listening at `http://localhost:5000/chat`.

---

## 2. Build the JavaScript Front-end

1. **Create `index.html`**  

    Of course you can integrate this with React, but here's a simple example.

   ```html
   <!-- in index.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Chatbot</title>
     <style>
       body { font-family: sans-serif; margin: 2em; }
       #chat { max-width: 600px; margin: auto; }
       .message { margin: 0.5em 0; }
       .user { text-align: right; }
       .bot { text-align: left; }
     </style>
   </head>
   <body>
     <div id="chat"></div>
     <input type="text" id="input" placeholder="Type a message…" autofocus />
     <button id="send">Send</button>

     <script src="script.js"></script>
   </body>
   </html>
   ```

2. **Create `script.js`**  

   ```javascript
   // in script.js
   const chatBox = document.getElementById("chat");
   const inputBox = document.getElementById("input");
   const sendBtn = document.getElementById("send");

   sendBtn.addEventListener("click", () => sendMessage());
   inputBox.addEventListener("keypress", e => {
     if (e.key === "Enter") sendMessage();
   });

   async function sendMessage() {
     const text = inputBox.value.trim();
     if (!text) return;

     appendMessage(text, "user");
     inputBox.value = "";

     try {
       const res = await fetch("http://localhost:5000/chat", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ message: text })
       });

       const { reply, error } = await res.json();
       if (error) {
         appendMessage("Error: " + error, "bot");
       } else {
         appendMessage(reply, "bot");
       }
     } catch (err) {
       appendMessage("Network error", "bot");
       console.error(err);
     }
   }

   function appendMessage(text, who) {
     const div = document.createElement("div");
     div.className = `message ${who}`;
     div.textContent = text;
     chatBox.appendChild(div);
     chatBox.scrollTop = chatBox.scrollHeight;
   }
   ```

3. **Serve and Test**  
   - **Option A (static file):** Simply open `index.html` in your browser.  
   - **Option B (via Node):**  

     ```bash
     npx http-server . -c-1
     ```

     Then navigate to `http://localhost:8080`.

Type a message, hit **Send**, and ChatGPT should send a response back.

---

## 3. Next Steps & Extensions

- **Conversation history:** Store recent messages in an array and include them in each API call to maintain context.  
- **Error handling:** Rate-limit retries, API-key missing, UI feedback.  
- **Styling:** Improve the chat UI with CSS.  

If you want to take a look at a bit more of an advanced bot, you can check out the Penny Bot folder, which is the back-end of a bot I made with Microsoft's Bot Development Kit. The main files you'll want to look at are app.py and bot.py in the Penny folder. You can ignore the pycache, deploymentTemplates, and venv folders.
