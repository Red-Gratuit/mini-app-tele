const tg = window.Telegram?.WebApp;
if (tg) {
    tg.expand();
    tg.ready();
}

const btn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const app = document.getElementById("app");   // ✅ BON ID
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
    if (music) {
        music.play().catch(() => {}); // évite crash iOS
    }

    intro.classList.remove("active");
    app.classList.add("active");
});

/* Navigation catégories */
document.querySelectorAll(".cat").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        const page = button.dataset.page;

        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById("page-" + page).classList.add("active");
    });
});
