function sayHello() {
  alert("Hello from trnds!");
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const chatLog = document.getElementById('chatLog');
  const message = input.value.trim();

  if (message === '') return;

  let botReply = "Hmm... I'm still learning. Try asking about Twitch or YouTube!";

  if (message.toLowerCase().includes("twitch")) {
    botReply = "🔥 Twitch Tip: Stream consistently and engage with chat!";
  } else if (message.toLowerCase().includes("youtube")) {
    botReply = "📈 YouTube Tip: Post Shorts to boost your reach fast!";
  }

  chatLog.innerHTML += `<p><strong>You:</strong> ${message}</p><p><strong>trnds-bot:</strong> ${botReply}</p>`;
  input.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}
