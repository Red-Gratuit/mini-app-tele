const tg = window.Telegram?.WebApp;
if (tg) tg.expand();

const intro = document.getElementById("intro");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

const pages = document.querySelectorAll(".page");
const navBtns = document.querySelectorAll(".bottom button[data-page]");
const snapBtns = document.querySelectorAll(".snap-btn");

let muted = false;

// musique fade-in
function startMusic() {
  music.volume = 0;
  music.play().catch(()=>{});
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 100);
}

// entrée
enterBtn.onclick = () => {
  startMusic();
  intro.classList.remove("active");
  app.classList.add("active");
};

// navigation
navBtns.forEach(btn => {
  btn.onclick = () => {
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
  };
});

// mute
muteBtn.onclick = () => {
  muted = !muted;
  music.muted = muted;
  muteBtn.textContent = muted ? "🔇" : "🔊";
};

// snapchat
snapBtns.forEach(btn => {
  btn.onclick = () => {
    const url = "https://www.snapchat.com/add/Enzoxr.59";
    if (tg) tg.openLink(url);
    else window.open(url, "_blank");
  };
});
