const tg = window.Telegram?.WebApp;
if (tg) {
    tg.expand();
    tg.ready();
}

const btn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

btn.onclick = () => {
    music.play();
    intro.style.display = "none";
    main.style.display = "block";
};

document.querySelectorAll(".categories button").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".page").forEach(p => p.style.display="none");
        document.getElementById(btn.dataset.page).style.display="block";
    };
});
