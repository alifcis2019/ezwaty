

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
      console.log(accordionCloseList[i]);
      accordionCloseList[i].addEventListener('click',(e)=>{
        console.log(accordionCloseList[i]);
        // close opened accordion
        accordionListText.forEach(el=>{
          console.log(el);
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



