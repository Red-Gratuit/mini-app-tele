const intro = document.getElementById("intro");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

enterBtn.onclick = () => {
  intro.classList.remove("active");
  app.classList.add("active");

  music.volume = 1;
  music.play().catch(()=>{});
};

muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.innerText = music.muted ? "🔇" : "🔊";
};

document.querySelectorAll(".cat").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".cat").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById("page-"+btn.dataset.page).classList.add("active");
  };
});
