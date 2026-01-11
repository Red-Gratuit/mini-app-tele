const tg = window.Telegram?.WebApp;
if(tg) tg.expand();

const intro = document.getElementById("intro");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

enterBtn.onclick = () => {
  music.volume = 0;
  music.play();
  let v = 0;
  let fade = setInterval(() => {
    if (v < 0.7) {
      v += 0.03;
      music.volume = v;
    } else clearInterval(fade);
  }, 100);

  intro.classList.remove("active");
  app.classList.add("active");
};

// catégories
document.querySelectorAll(".cat").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page-" + btn.dataset.page).classList.add("active");
  };
});

// mute
muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.innerText = music.muted ? "🔇" : "🔊";
};

// snapchat
document.querySelectorAll(".snap-btn").forEach(b => {
  b.onclick = () => {
    tg.openLink("https://www.snapchat.com/add/TON_SNAP");
  };
});
