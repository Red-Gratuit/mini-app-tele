const tg = window.Telegram?.WebApp;
if(tg) tg.expand();

const intro = document.getElementById("intro");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

/* Entrée */
enterBtn.onclick = () => {
  music.volume = 0;
  music.play();
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 100);

  intro.classList.remove("active");
  app.classList.add("active");
};

/* Navigation catégories */
document.querySelectorAll(".cat").forEach(btn => {
  btn.onclick = () => {
    const page = btn.dataset.page;

    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page-" + page).classList.add("active");
  };
});

/* Mute */
muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
};

/* Snapchat */
document.querySelectorAll(".snap-btn").forEach(b => {
  b.onclick = () => {
    if (tg) tg.openLink("https://www.snapchat.com/add/TON_USERNAME");
    else window.open("https://www.snapchat.com/add/TON_USERNAME","_blank");
  };
});
