document.querySelector(".cancel__btn").addEventListener('click',()=>{
    document.querySelector(".event__cancelation").style.display="block"
})
document.querySelector(".close__event__cancelation__menu").addEventListener('click',()=>{
    document.querySelector(".event__cancelation").style.display="none"
})

document.querySelector(".confirm__cancel").addEventListener('click',()=>{
    document.querySelector(".confirm__event__cancelation").style.display = "block"
    document.querySelector(".event__cancelation").style.display="none"
})


document.querySelector(".close__confirm__cancelation").addEventListener("click",()=>{
    document.querySelector(".confirm__event__cancelation").style.display="none";
})

document.querySelector(".viewAll__btn").addEventListener('click',()=>{
    document.querySelector(".invitees__list__view").style.display="block"
})  


document.querySelector(".close__invitees__list").addEventListener('click',()=>{
    document.querySelector(".invitees__list__view").style.display="none"
})  