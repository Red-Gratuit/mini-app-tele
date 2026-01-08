const status = document.getElementById("status");
const subtitle = document.getElementById("subtitle");
const button = document.getElementById("mainBtn");

let tg = null;

if (window.Telegram && Telegram.WebApp) {
  tg = Telegram.WebApp;
  tg.expand();

  status.textContent = "✅ Connecté à Telegram";
  subtitle.textContent = `👋 ${tg.initDataUnsafe?.user?.first_name || "Utilisateur"}`;
} else {
  status.textContent = "Mode aperçu";
}

button.onclick = () => {
  if (tg) {
    tg.showAlert("Bienvenue sur XR Shop 🚀");
  } else {
    alert("Bienvenue sur XR Shop 🚀");
  }
};
