const cats = document.querySelectorAll(".cat");
const views = document.querySelectorAll(".view");

cats.forEach(btn=>{
  btn.onclick = ()=>{
    const target = btn.dataset.view;

    cats.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    views.forEach(v=>{
      if(v.id === target){
        v.classList.add("active");
      }else{
        v.classList.remove("active");
      }
    });
  };
});

function openSnap(){
  window.open("https://t.me/XRshop62","_blank");
}
