const intro = document.getElementById("intro");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

let musicStarted = false;

/* Bouton principal */
enterBtn.addEventListener("click", () => {
  // cacher intro
  intro.classList.remove("active");
  // afficher app
  app.classList.add("active");

  // démarrer musique (obligatoire iOS)
  if (!musicStarted) {
    music.volume = 1;
    music.play().catch(() => {});
    musicStarted = true;
  }
});

/* Mute */
muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
});

/* Categories */
document.querySelectorAll(".cat").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById("page-" + btn.dataset.page).classList.add("active");
  });
});
