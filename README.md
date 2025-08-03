
# Revolt Voice Chatbot (Replica using Gemini Live API)

This project replicates the **Rev** voice chatbot from [Revolt Motors](https://live.revoltmotors.com) using **Gemini Live API**. It supports **real-time conversation**, **voice input/output**, **interruption handling**, and **fast responses**, just like the original.

## 🔥 Features

- 🎤 **Voice-based conversation** with Gemini 2.5 audio dialog model
- ⚡ **Low latency** response (1-2 sec average)
- 🔄 **Interrupt AI mid-response** — speaks only when you stop
- 🗣️ **Multilingual support**
- 🧠 Gemini replies are limited to **Revolt Motors topics only**

## 💻 Tech Stack

- **Frontend**: HTML, JavaScript (Web Speech API)
- **Backend**: Node.js, Express.js
- **API**: Gemini 2.5 Flash Live Audio Dialog (native)
- **Hosting**: Railway

## 📹 Demo Video

👉 [Watch the working demo](https://drive.google.com/file/d/1B8ELr03LI9n--n9owD4Uo7WHd1zFO6Yp/view?usp=sharing)

## 🛠️ How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/codegurupoocoo/revolt-voice-chatbot-2-.git
cd revolt-voice-chatbot-2-
````

### 2. Set up environment

Create a `.env` file inside the `server` folder:

```
GEMINI_API_KEY=your_google_ai_api_key_here
```

> You can get your key from [https://aistudio.google.com](https://aistudio.google.com)

### 3. Install dependencies

```bash
cd server
npm install
```

### 4. Start the server

```bash
node index.js
```

By default, it runs on `http://localhost:8080`

### 5. Open frontend

Open `index.html` from the root folder in a browser. You can now start speaking with the AI assistant!

## 🌐 Hosted Version

You can access the live version here:
🔗 [revolt-voice-chatbot-2-production.up.railway.app](https://revolt-voice-chatbot-2-production.up.railway.app)

> Note: Free API limits may sometimes slow responses or disable audio temporarily.

## ⚙️ Gemini Model Used

We used this model in final submission:

```
gemini-2.5-flash-preview-native-audio-dialog
```

For testing or debugging, switch to:

* `gemini-live-2.5-flash-preview`
* `gemini-2.0-flash-live-001`

## 📂 Folder Structure

```
.
├── index.html       # Frontend
└── server
    ├── index.js     # Express backend
    └── .env         # API key (not pushed to GitHub)
```

## 📑 System Instructions

Gemini is guided to only respond with information related to **Revolt Motors** — product details, services, features, etc.

---

## 📬 Contact

Made by **Tushar Singh**
📧 [tusharsingh1616@gmail.com](mailto:tusharsingh1616@gmail.com)

---

```

Let me know if you want me to commit this README directly or help add screenshots too.
```
