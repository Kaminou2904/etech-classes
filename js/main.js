const imgPopupContainer = document.querySelector('.imgPopupContainer');
const popupImg = document.querySelector('.popupImg');
const navBtn = document.querySelector('.navBtn');
const mobNav = document.querySelector(".mobNav");
const mobULCross = document.querySelector(".mobULCross");

// navbar function
navBtn.addEventListener("click", ()=>{
    mobNav.style.display = 'flex';
});
mobULCross.addEventListener('click', ()=>{
    mobNav.style.display = 'none';
});
mobNav.addEventListener('click', (e)=>{
    if(e.target == mobNav){
        mobNav.style.display = 'none';
    }
})

const imageModal = (e)=>{
    if(window.innerWidth >= 700){
        popupImg.src = e.childNodes[1].src;
        imgPopupContainer.style.display = 'flex';
    }
}

imgPopupContainer.addEventListener('click', (e)=>{
    if(e.target === imgPopupContainer){
        imgPopupContainer.style.display = 'none';
    }
});