let cardForm_open = false
document.querySelector(".card-dropdown").addEventListener('click',()=>{
    if(!cardForm_open){
        document.querySelector(".payment__down__left__cardDetails__form").style.display = "flex"
        cardForm_open=true
    }
    else {
        cardForm_open=false
        document.querySelector(".payment__down__left__cardDetails__form").style.display = "none"
    }
})


let card__box = document.querySelectorAll(".card__box")
let paypal = false
for(let i=0 ; i < card__box.length ; i++) {
    card__box[i].addEventListener('click',()=>{
        document.querySelector(".payment__down__left__cardDetails__paypal").classList.remove("SelectCard")
        document.querySelector(".payment__down__left__cardDetails__paypal").children[2].remove()
        document.querySelector(".payment__down__left__cardDetails__paypal").innerHTML +=`
                                <svg class="paypal"  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5Z" stroke="#6B6C6C" stroke-width="1.5"/>
                                    <path d="M8 13L10.5 15.5L16 9.5" stroke="white" stroke-width="1.5"/>
                                </svg>
                
                `
        paypal=false
        for(let j=0; j < card__box.length;j++)
        {
            if(card__box[j].classList.contains("SelectCard"))
            {
                card__box[j].classList.remove("SelectCard")
                card__box[j].children[2].remove()
                card__box[j].innerHTML +=`
                <div class="not_checked_radio">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5Z" stroke="#6B6C6C" stroke-width="1.5"/>
                                    <path d="M8 13L10.5 15.5L16 9.5" stroke="white" stroke-width="1.5"/>
                                </svg>
                </div>
                `
            }
        }
        card__box[i].classList.add("SelectCard")
        card__box[i].children[2].remove()
        card__box[i].innerHTML +=`
        <div class="checked__radio" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5Z" fill="#003A61" stroke="#003A61" stroke-width="1.5"/>
            <path d="M8 13L10.5 15.5L16 9.5" stroke="white" stroke-width="1.5"/>
        </svg>
    </div>
        `
    })
}

// // paypal pay

// document.querySelector(".payment__down__left__cardDetails__paypal").addEventListener('click',(e)=>{
//     if(!paypal)
//     {
//         document.querySelector(".payment__down__left__cardDetails__paypal").children[2].innerHTML += `
//         <svg class="paypal" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//         <path d="M22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5Z" fill="#003A61" stroke="#003A61" stroke-width="1.5"/>
//         <path d="M8 13L10.5 15.5L16 9.5" stroke="white" stroke-width="1.5"/>
//       </svg>
//         `
//         document.querySelector(".payment__down__left__cardDetails__paypal").classList.add("SelectCard")
//         for(let j=0; j < card__box.length;j++)
//         {
//             if(card__box[j].classList.contains("SelectCard"))
//             {
//                 card__box[j].classList.remove("SelectCard")
//                 card__box[j].children[2].remove()
//                 card__box[j].innerHTML +=`
//                 <div class="not_checked_radio">
//                                 <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//                                     <path d="M22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5Z" stroke="#6B6C6C" stroke-width="1.5"/>
//                                     <path d="M8 13L10.5 15.5L16 9.5" stroke="white" stroke-width="1.5"/>
//                                 </svg>
//                 </div>
//                 `
//             }
//         }
//         paypal = true
//     }
// })

// document.querySelector(".add-card-menu").addEventListener('click',()=> {
//     document.querySelector(".cardMenu").style.display="block"
// })

// document.querySelector(".form__close").addEventListener('click',()=>{
//     document.querySelector(".cardMenu").style.display="none"
// })