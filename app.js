const tg = window.Telegram?.WebApp || null;

const music = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");
const snapBtn = document.getElementById("snapBtn");

const home = document.getElementById("home");
const content = document.getElementById("content");

// 🎚️ Fade-in musique
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
  }, 80);
}

// ▶️ Entrer
enterBtn.addEventListener("click", () => {
  fadeInMusic();
  home.classList.remove("active");
  content.classList.add("active");
});

// 👻 Snapchat (REMPLACE PAR TON LIEN)
snapBtn.addEventListener("click", () => {
  const snapchatUrl = "https://www.snapchat.com/add/enzoxr.59";
  if (tg) {
    tg.openLink(snapchatUrl);
  } else {
    window.open(snapchatUrl, "_blank");
  }
});
