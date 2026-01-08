const button = document.getElementById("mainBtn");
const status = document.getElementById("status");
const music = document.getElementById("bgMusic");

let tg = null;

// Telegram
if (window.Telegram && Telegram.WebApp) {
  tg = Telegram.WebApp;
  tg.expand();
  status.textContent = "✅ Connecté à Telegram";
} else {
  status.textContent = "ℹ️ Mode aperçu";
}

// ▶️ Clic sur Entrer
button.addEventListener("click", () => {
  // 🎵 Musique (autorisé après interaction utilisateur)
  music.volume = 0.5;
  music.play().catch(() => {});

  if (tg) {
    tg.showAlert("Bienvenue sur XR Shop 🚀");
  } else {
    alert("Bienvenue sur XR Shop 🚀");
  }
});
