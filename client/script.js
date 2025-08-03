const sendBtn = document.getElementById("sendBtn");
const textInput = document.getElementById("textInput");
const transcriptEl = document.getElementById("transcript");
const responseEl = document.getElementById("response");

sendBtn.onclick = async () => {
  const userMessage = textInput.value.trim();
  if (!userMessage) return;

  transcriptEl.innerText = "You: " + userMessage;
  responseEl.innerText = "Rev is thinking... 🤖";

  try {
    // Cancel any ongoing speech
    if (speechSynthesis.speaking) speechSynthesis.cancel();

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage }),
    });

    const data = await res.json();
    console.log("Server response:", data);

    if (data?.response) {
      responseEl.innerText = "Rev: " + data.response;

      const utterance = new SpeechSynthesisUtterance(data.response);
      speechSynthesis.speak(utterance);
    } else {
      responseEl.innerText = "❌ Rev didn't respond. Try again.";
    }
  } catch (error) {
    console.error("Error fetching response:", error);
    responseEl.innerText = "❌ Error contacting Rev. Please try again.";
  }

  textInput.value = "";
};
