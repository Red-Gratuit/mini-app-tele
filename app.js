const tg = window.Telegram?.WebApp;
if (tg) tg.expand();

const intro = document.getElementById("intro");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

const snapBtns = document.querySelectorAll(".snap-btn");

let muted = false;

// MUSIQUE FADE IN
function startMusic() {
  music.volume = 0;
  music.play().catch(() => {});
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 100);
}

// ENTREE
enterBtn.onclick = () => {
  startMusic();
  intro.classList.remove("active");
  app.classList.add("active");
};

// MUTE
muteBtn.onclick = () => {
  muted = !muted;
  music.muted = muted;
  muteBtn.textContent = muted ? "🔇" : "🔊";
};

// SNAPCHAT
snapBtns.forEach(btn => {
  btn.onclick = () => {
    const url = "https://www.snapchat.com/add/enzoxr.59";
    if (tg) tg.openLink(url);
    else window.open(url, "_blank");
  };
});
