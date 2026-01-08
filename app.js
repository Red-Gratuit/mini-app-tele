const tg = window.Telegram?.WebApp || null;

const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const snapBtn = document.getElementById("snapBtn");

const intro = document.getElementById("intro");
const products = document.getElementById("products");

if (tg) tg.expand();

// fade-in musique
function startMusic() {
  music.volume = 0;
  music.play().catch(()=>{});
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.5) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 80);
}

startBtn.onclick = () => {
  startMusic();
  intro.classList.remove("active");
  products.classList.add("active");
};

snapBtn.onclick = () => {
  const url = "https://www.snapchat.com/add/enzoxr.59";
  if (tg) tg.openLink(url);
  else window.open(url, "_blank");
};
