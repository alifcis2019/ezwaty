// handel popup left side in small screen

document.querySelector(".popup").addEventListener('click',()=>{
    document.querySelector(".profile__leftSide").style.display = "flex"
})
document.querySelector(".close__popup").addEventListener('click',()=>{
    document.querySelector(".profile__leftSide").style.display = "none"
})

// handle buttons in left side
let btns = document.querySelectorAll(".profile__leftSide__button")
let right_side_details = document.querySelectorAll(".right_side_details")
for(let i =0 ; i< btns.length;i++){
    btns[i].addEventListener("click",()=>{
        document.querySelector(".delect__account__button").classList.remove("profile__leftSide__button__active")
        for(let j =0 ; j< right_side_details.length;j++) {
            if(j === i) {
                right_side_details[j].style.display = "block";
                right_side_details[j].setAttribute('style', 'display:flex !important');
                btns[j].classList.add("profile__leftSide__button__active")
            }
            else {
                right_side_details[j].setAttribute('style', 'display:none !important');
                btns[j].classList.remove("profile__leftSide__button__active");
            }
        }
})
}


// add new card visa 

document.querySelector(".add__new__card").addEventListener('click',()=>{
    document.querySelector(".add__card__menu").style.display = "block"
})

// close add new visa menu

document.querySelector(".close__add__new__card").addEventListener('click',()=>{
    document.querySelector(".add__card__menu").setAttribute('style','display:none !important' )
})

// edit card 
let edit_card_container = document.querySelectorAll(".edit__card")


for(let i =0 ; i < edit_card_container.length ; i++){
    edit_card_container[i].addEventListener('click',()=>{
        document.querySelector(".edit__card__menu").style.display = "block"
    })
}

// close add new visa menu

document.querySelector(".close__update__card").addEventListener('click',()=>{
    document.querySelector(".edit__card__menu").setAttribute('style','display:none !important' )
})



// delete account button

document.querySelector(".delect__account__button").addEventListener('click',()=>{
    document.querySelector(".delect__account__button").classList.add("profile__leftSide__button__active")
    document.querySelector(".delete_account_menu").setAttribute('style','display:block !important;')
})


document.querySelector(".close__delete__menu").addEventListener('click',()=>{
    document.querySelector(".delete_account_menu").setAttribute('style','display:none !important' )
})