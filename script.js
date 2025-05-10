function sendMessage() {
  const input = document.getElementById('userInput');
  const chatLog = document.getElementById('chatLog');
  const message = input.value.trim();
  if (message === '') return;

  let botReply = "Try asking about Twitch, YouTube, or growth tips!";

  if (message.toLowerCase().includes("twitch")) {
    botReply = "🔥 Twitch Tip: Consistency + chat interaction = growth!";
  } else if (message.toLowerCase().includes("youtube")) {
    botReply = "📈 YouTube Tip: Post Shorts & stay niche early on.";
  }

  chatLog.innerHTML += `<div class="bubble user">${message}</div>`;
  chatLog.innerHTML += `<div class="bubble bot">${botReply}</div>`;

  input.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}