let prefrence__box = document.querySelectorAll(".prefrence__box")
let prefrence__box__radio = document.querySelectorAll(".prefrence__box__radio")
for(let i =0 ; i< prefrence__box.length ; i++)
{
    prefrence__box[i].addEventListener('click',()=>{
        if(!prefrence__box[i].classList.contains("prefrence__box__active")){
            for(let j =0 ; j< prefrence__box.length;j++) {
                if(prefrence__box[j].classList.contains("prefrence__box__active")) {
                    prefrence__box[j].classList.remove("prefrence__box__active")
                    prefrence__box__radio[j].innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#6B6C6C" stroke-width="1.5"/>
                    <path d="M8 12.5L10.5 15L16 9" stroke="white" stroke-width="1.5"/>
                </svg>
                    `
                }
            }
            prefrence__box[i].classList.add("prefrence__box__active")
            prefrence__box__radio[i].innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#003A61" stroke="#003A61" stroke-width="1.5"/>
                <path d="M8 12.5L10.5 15L16 9" stroke="white" stroke-width="1.5"/>
                </svg>

            `
        }
    })
}