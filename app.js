const tg = window.Telegram?.WebApp || null;

const music = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");
const muteBtn = document.getElementById("muteBtn");
const status = document.getElementById("status");

const home = document.getElementById("home");
const menu = document.getElementById("menu");

let isMuted = false;

if (tg) {
  tg.expand();
  status.textContent = "✅ Connecté à Telegram";
} else {
  status.textContent = "ℹ️ Mode aperçu";
}

// 🎚️ Fade-in du volume
function fadeInMusic() {
  music.volume = 0;
  music.play().catch(() => {});
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.5) {
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

// ▶️ Entrer
enterBtn.addEventListener("click", () => {
  fadeInMusic();
  home.classList.remove("active");
  menu.classList.add("active");
});

// 🔇 Mute / Unmute
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  music.muted = isMuted;
  muteBtn.textContent = isMuted ? "🔊 Son" : "🔇 Muet";
});
