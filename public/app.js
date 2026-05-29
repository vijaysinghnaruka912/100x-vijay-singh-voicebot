const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");
const micButton = document.getElementById("micButton");
const stopButton = document.getElementById("stopButton");
const responseBox = document.getElementById("responseBox");
const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");
const modeText = document.getElementById("modeText");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

function setStatus(text, working = false) {
  if (statusText) statusText.textContent = text;
  if (statusDot) statusDot.classList.toggle("working", working);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferredVoice =
    voices.find(v => /en-IN/i.test(v.lang)) ||
    voices.find(v => /en-US/i.test(v.lang)) ||
    voices.find(v => /en-GB/i.test(v.lang));

  if (preferredVoice) utterance.voice = preferredVoice;

  window.speechSynthesis.speak(utterance);
}

async function askBot() {
  const message = questionInput.value.trim();

  if (!message) {
    responseBox.textContent = "Please speak or type a question first.";
    return;
  }

  try {
    setStatus("Thinking...", true);
    askButton.disabled = true;
    micButton.disabled = true;
    modeText.textContent = "";

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    if (!res.ok && data.error) {
      throw new Error(data.error);
    }

    const answer = data.answer || "Sorry, I could not generate an answer right now.";
    responseBox.textContent = answer;

    if (data.mode === "openai") {
      modeText.textContent = "Live AI mode active.";
    } else {
      modeText.textContent = "Fallback mode active. The bot is using prepared answers.";
    }

    speak(answer);
    setStatus("Ready", false);

  } catch (err) {
    console.error(err);
    responseBox.textContent = "Something went wrong. Please refresh the page and try again.";
    modeText.textContent = "Error while connecting to the bot.";
    setStatus("Ready", false);
  } finally {
    askButton.disabled = false;
    micButton.disabled = false;
  }
}

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    setStatus("Listening...", true);
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    questionInput.value = transcript;
    setStatus("Question captured", false);
    askBot();
  };

  recognition.onerror = () => {
    setStatus("Mic error. Please type your question.", false);
  };

  recognition.onend = () => {
    if (statusText.textContent === "Listening...") {
      setStatus("Ready", false);
    }
  };
} else {
  micButton.disabled = true;
  micButton.textContent = "Mic not supported here";
}

micButton.addEventListener("click", () => {
  if (recognition) {
    recognition.start();
  }
});

askButton.addEventListener("click", askBot);

stopButton.addEventListener("click", () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (recognition) {
    recognition.stop();
  }

  setStatus("Ready", false);
});

document.querySelectorAll(".example").forEach(button => {
  button.addEventListener("click", () => {
    questionInput.value = button.textContent;
    askBot();
  });
});

if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {};
}
