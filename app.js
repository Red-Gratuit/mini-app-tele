const tg = window.Telegram?.WebApp;
if(tg) tg.expand();

const music=document.getElementById("bgMusic");
const enterBtn=document.getElementById("enterBtn");
const intro=document.getElementById("intro");
const app=document.getElementById("app");

enterBtn.onclick=()=>{
  music.volume=0;
  music.play();
  let v=0;
  let fade=setInterval(()=>{
    if(v<0.6){v+=0.02;music.volume=v}else clearInterval(fade);
  },100);
  intro.classList.remove("active");
  app.classList.add("active");
};

document.querySelectorAll(".cat").forEach(btn=>{
btn.onclick=()=>{
  document.querySelectorAll(".cat").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".cat-page").forEach(p=>p.classList.remove("active"));
  document.getElementById(btn.dataset.cat).classList.add("active");
};
});

document.querySelectorAll(".snap-btn").forEach(b=>{
b.onclick=()=>{
  tg.openLink("https://www.snapchat.com/add/TON_USERNAME");
};
});

document.getElementById("muteBtn").onclick=()=>{
 music.muted=!music.muted;
};
