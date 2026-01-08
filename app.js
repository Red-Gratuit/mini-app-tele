const tg = window.Telegram?.WebApp || null;
if (tg) tg.expand();

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".bottom-bar button[data-page]");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");
const snapBtn = document.getElementById("snapBtn");

let muted = false;

// navigation
navButtons.forEach(btn => {
  btn.onclick = () => {
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
  };
});

// volume
muteBtn.onclick = () => {
  muted = !muted;
  music.muted = muted;
  muteBtn.textContent = muted ? "🔇" : "🔊";
};

// snapchat
snapBtn.onclick = () => {
  const url = "https://www.snapchat.com/add/enzoxr.59";
  if (tg) tg.openLink(url);
  else window.open(url, "_blank");
};
