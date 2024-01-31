// filter checked
let filter__selection__checker = document.querySelectorAll(".filter__selection__checker") 
for(let i =0 ; i< filter__selection__checker.length ; i++) {
    filter__selection__checker[i].addEventListener('click',()=>{
        if(!filter__selection__checker[i].parentElement.classList.contains("checked")){
            filter__selection__checker[i].parentElement.classList.add("checked");
            filter__selection__checker[i].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M22.1667 3.5C23.4553 3.5 24.5 4.54467 24.5 5.83333V22.1667C24.5 23.4553 23.4553 24.5 22.1667 24.5H5.83333C4.54467 24.5 3.5 23.4553 3.5 22.1667V5.83333C3.5 4.54467 4.54467 3.5 5.83333 3.5H22.1667Z" fill="#003A61" stroke="#003A61" stroke-width="1.75"/>
            <path d="M9.33301 14.5833L12.2497 17.5L18.6663 10.5" stroke="white" stroke-width="1.75"/>
            </svg>
            `
        }
        else {
            filter__selection__checker[i].parentElement.classList.remove("checked");
            filter__selection__checker[i].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M22.1667 3.5C23.4553 3.5 24.5 4.54467 24.5 5.83333V22.1667C24.5 23.4553 23.4553 24.5 22.1667 24.5H5.83333C4.54467 24.5 3.5 23.4553 3.5 22.1667V5.83333C3.5 4.54467 4.54467 3.5 5.83333 3.5H22.1667Z" stroke="#6B6C6C" stroke-width="1.75"/>
                                    </svg>
            `
        }
    })
}

// clear all filters

document.querySelector(".filter__clearAll__btn").addEventListener('click',()=>{
    for(let j =0 ; j< filter__selection__checker.length ; j++){
        filter__selection__checker[j].parentElement.classList.remove("checked");
            filter__selection__checker[j].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M22.1667 3.5C23.4553 3.5 24.5 4.54467 24.5 5.83333V22.1667C24.5 23.4553 23.4553 24.5 22.1667 24.5H5.83333C4.54467 24.5 3.5 23.4553 3.5 22.1667V5.83333C3.5 4.54467 4.54467 3.5 5.83333 3.5H22.1667Z" stroke="#6B6C6C" stroke-width="1.75"/>
                                    </svg>
            `
            console.log("hi");
    }
})

// dropdown filter part

let filter__part__dropdown = document.querySelectorAll(".filter__part__dropdown")
let filter__part__selection__container = document.querySelectorAll(".filter__part__selection__container")
console.log(filter__part__selection__container);
for(let i =0 ; i< filter__part__dropdown.length ; i++) {
    filter__part__dropdown[i].addEventListener('click',()=>{
        if(!filter__part__selection__container[i].classList.contains("filter__collapsed")) {
            filter__part__selection__container[i].classList.add("filter__collapsed")
            filter__part__selection__container[i].setAttribute('style','display:none !important;')  
        }
        else {
            filter__part__selection__container[i].classList.remove("filter__collapsed")
            filter__part__selection__container[i].setAttribute('style','display:flex !important;') 
        }
    })
    
}

// select hall 

let select__hall__btn = document.querySelectorAll(".select__hall__btn") 
let hall__cards = document.querySelectorAll(".hall__card")
for(let s = 0 ; s < select__hall__btn.length ; s++){
    select__hall__btn[s].addEventListener('click',(e)=>{
        if(!hall__cards[s].classList.contains("selected__hall")){
            hall__cards[s].classList.add("selected__hall")
            select__hall__btn[s].style.background = " #003A61"
            select__hall__btn[s].children[0].style.color = "#FFF"
            select__hall__btn[s].children[1].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M22.5 12.8101C22.5 7.28721 18.0228 2.81006 12.5 2.81006C6.97715 2.81006 2.5 7.28721 2.5 12.8101C2.5 18.3329 6.97715 22.8101 12.5 22.8101C18.0228 22.8101 22.5 18.3329 22.5 12.8101Z" fill="white" stroke="white" stroke-width="1.5"/>
            <path d="M8.5 13.3101L11 15.8101L16.5 9.81006" stroke="#003A61" stroke-width="1.5"/>
        </svg>
            `
        }

        else {
            hall__cards[s].classList.remove("selected__hall")
            select__hall__btn[s].style.background = " #FFF"
            select__hall__btn[s].children[0].style.color = "#424242"
            select__hall__btn[s].children[1].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M12.5 7.81006V17.8101M17.5 12.8101H7.5" stroke="#424242" stroke-width="1.5" stroke-linejoin="round"/>
                                            <path d="M22.5 12.8101C22.5 7.28721 18.0228 2.81006 12.5 2.81006C6.97715 2.81006 2.5 7.28721 2.5 12.8101C2.5 18.3329 6.97715 22.8101 12.5 22.8101C18.0228 22.8101 22.5 18.3329 22.5 12.8101Z" stroke="#424242" stroke-width="1.5" stroke-linejoin="round"/>
                                        </svg>
            `
        }
    })
}