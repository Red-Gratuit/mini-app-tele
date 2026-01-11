const tg = window.Telegram?.WebApp;
if(tg) tg.expand();

const intro=document.getElementById("intro");
const app=document.getElementById("app");
const enterBtn=document.getElementById("enterBtn");
const music=document.getElementById("bgMusic");

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

   document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
   document.getElementById("view-"+btn.dataset.view).classList.add("active");
 };
});

document.getElementById("muteBtn").onclick=()=>{
 music.muted=!music.muted;
};

document.querySelectorAll(".snap-btn").forEach(b=>{
 b.onclick=()=>{
   tg.openLink("https://www.snapchat.com/add/TON_USERNAME");
 };
});
