async function sendMessage() {
  const input = document.getElementById('userInput');
  const chatLog = document.getElementById('chatLog');
  const message = input.value.trim();
  if (message === '') return;

  // Show user message
  chatLog.innerHTML += `<div class="bubble user">${message}</div>`;
  input.value = '';
  chatLog.scrollTop = chatLog.scrollHeight;

  // Show typing...
  chatLog.innerHTML += `<div class="bubble bot" id="typing">trnds-bot is thinking...</div>`;
  chatLog.scrollTop = chatLog.scrollHeight;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";

    document.getElementById('typing').remove();
    chatLog.innerHTML += `<div class="bubble bot">${botReply}</div>`;
    chatLog.scrollTop = chatLog.scrollHeight;

  } catch (error) {
    document.getElementById('typing').remove();
    chatLog.innerHTML += `<div class="bubble bot">⚠️ Error: ${error.message}</div>`;
  }
}
