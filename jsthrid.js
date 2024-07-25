const textareaa=document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
textareaa.addEventListener("keyup",()=>{
    updateCounter();
});

function updateCounter(){
    totalCounterEl.innerText = textareaa.value.length;
    remainingCounterEl.innerText=textareaa.getAttribute(
        "maxlength") -textareaa.value.length ;
}