const tg = window.Telegram?.WebApp || null;

const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const snapBtn = document.getElementById("snapBtn");

const intro = document.getElementById("intro");
const content = document.getElementById("content");

if (tg) tg.expand();

// 🎚️ Fade-in musique
function fadeInMusic() {
  music.volume = 0;
  music.play().catch(() => {});
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.5) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 80);
}

// ▶️ Choisir sa puff
startBtn.addEventListener("click", () => {
  fadeInMusic();
  intro.classList.remove("active");
  content.classList.add("active");
});

// 👻 Snapchat
snapBtn.addEventListener("click", () => {
  const url = "https://www.snapchat.com/add/enzoxr.59";
  if (tg) tg.openLink(url);
  else window.open(url, "_blank");
});
