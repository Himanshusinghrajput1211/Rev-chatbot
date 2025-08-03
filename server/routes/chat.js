const express = require("express");
const router = express.Router();
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  const { userMessage } = req.body;

  const prompt = {
    contents: [
      {
        role: "user",
        parts: [{ text: `You are Rev, the Revolt Motors assistant. Reply only to questions about Revolt bikes, features, service, etc.\n\nUser: ${userMessage}` }],
      }
    ]
  };

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // ✅ v1-compliant model name
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ response: text });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: "Gemini API call failed." });
  }
});

module.exports = router;
