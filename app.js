const intro = document.getElementById("intro");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

enterBtn.addEventListener("click", () => {
  intro.classList.remove("show");
  app.classList.add("show");

  music.volume = 0;
  music.play();

  let v = 0;
  const fade = setInterval(() => {
    v += 0.05;
    music.volume = v;
    if (v >= 1) clearInterval(fade);
  }, 100);
});

muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
});

/* Categories */
document.querySelectorAll(".cat").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("show"));

    btn.classList.add("active");
    document.getElementById("page-" + btn.dataset.page).classList.add("show");
  });
});
