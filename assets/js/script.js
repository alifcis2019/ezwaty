

  // addWishList handling
  let wishLists = document.querySelectorAll(".addWishList")
  for(let i =0 ; i< wishLists.length ; i++)
  {
    wishLists[i].addEventListener("click", ()=>{
      if(!wishLists[i].parentElement.classList.contains("addedToWishlist")){
        wishLists[i].parentElement.classList.add("addedToWishlist")
      wishLists[i].innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M18.8569 4.55475C14.8652 2.41389 11.9991 5.56976 11.9991 5.56976C11.9991 5.56976 9.13283 2.41388 5.14113 4.55474C0.306415 7.14774 -0.0407553 17.3021 11.9991 21.8101C24.0389 17.3021 23.6916 7.14775 18.8569 4.55475Z" fill="#D61C2A" stroke="#D61C2A" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
      `
    }
    else {
      wishLists[i].parentElement.classList.remove("addedToWishlist")
      wishLists[i].innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M19.3569 3.74469C15.3652 1.60383 12.4991 4.7597 12.4991 4.7597C12.4991 4.7597 9.63283 1.60382 5.64113 3.74468C0.806415 6.33768 0.459245 16.492 12.4991 21C24.5389 16.492 24.1916 6.33769 19.3569 3.74469Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>
      `
    }
      })
  }

    // accordion Handle

    const accordionListText = document.querySelectorAll(".accordion__text")
    accordionListText.forEach(e=>{
      e.parentElement.parentElement.children[0].children[1].children[0].style.display="none";
      e.parentElement.parentElement.children[0].children[1].children[1].style.display="block";
      e.style.display="none";
    })

    accordionListText[0].style.display = "block"
    accordionListText[0].parentElement.parentElement.children[0].children[1].children[1].style.display="none";
    accordionListText[0].parentElement.parentElement.children[0].children[1].children[0].style.display="block";

    let accordionCloseList = document.querySelectorAll(".accordion__closed")
    for(let i =0 ; i< accordionCloseList.length;i++){
      accordionCloseList[i].addEventListener('click',(e)=>{
        // close opened accordion
        accordionListText.forEach(el=>{
          el.parentElement.parentElement.children[0].children[1].children[0].style.display="none";
          el.parentElement.parentElement.children[0].children[1].children[1].style.display="block";
          el.style.display="none";
        });
        console.log(e.parentElement);
        e.target.parentElement.parentElement.parentElement.children[1].children[0].style.display = "block";
        e.target.style.display = "none";
        e.target.parentElement.children[0].style.display = "block";
      })
    }

    let accordionOpenList = document.querySelectorAll(".accordion__opened")
    for(let i =0 ; i < accordionOpenList.length;i++){
      accordionOpenList[i].addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.parentElement.children[1].children[0].style.display = "none";
        e.target.style.display = "none";
        e.target.parentElement.children[1].style.display = "block";
      })
    }



