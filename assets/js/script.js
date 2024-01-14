  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

    /**
   * Scroll top button
   */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }  


    // navbar Tab on mobile Handle
    document.querySelector(".navbarTab").addEventListener('click',(e)=>{
      document.querySelector(".navbarThree__subMenu").style.display = "block";
      document.querySelector(".navbarClose").style.display = "block";
      document.querySelector(".navbarTab").style.display = "none";
    }
    )

    document.querySelector(".navbarClose").addEventListener('click',()=>{
      document.querySelector(".navbarTab").style.display = "block";
      document.querySelector(".navbarThree__subMenu").style.display = "none";
      document.querySelector(".navbarClose").style.display = "none";
    })


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


    // user log in submenu (create Account)

    document.querySelector(".userLogin").addEventListener('click',(e)=>{
      if(document.querySelector(".CeateAccount").style.visibility != "visible" ) {
        document.querySelector(".CeateAccount").style.visibility = "visible"
        document.querySelector(".notification__subMenu").style.visibility = "hidden"
        document.querySelector(".emptyFavouriteList").style.visibility = "hidden"
      }
      else {
        document.querySelector(".CeateAccount").style.visibility = "hidden"
      }
    })


    // wishlist click submenu
    document.querySelector(".userWishlist").addEventListener('click',(e)=>{
      if(document.querySelector(".emptyFavouriteList").style.visibility != "visible" ) {
        document.querySelector(".emptyFavouriteList").style.visibility = "visible"
        document.querySelector(".notification__subMenu").style.visibility = "hidden"
        document.querySelector(".CeateAccount").style.visibility = "hidden"
      }
      else {
        document.querySelector(".emptyFavouriteList").style.visibility = "hidden"
      }
    })

    // NOTIFICATION SUBMENU BUTTONS HANDLE

    
    // INVITATION BUTTON
    document.querySelector(".invitationButton").addEventListener('click',()=>{
      document.querySelector(".notifiaction__subMenu__notifications").style.display = "none"
      document.querySelector(".notifiaction__subMenu__invitaions").style.display = "block"
      document.querySelector(".invitationButton").style.background = "#003A61"
      document.querySelector(".invitationButton").children[0].style.color = "white"
      document.querySelector(".notificationButton").style.background= "white"
      document.querySelector(".notificationButton").children[0].style.color= "gray"
    })
    // NOTIFICATION BUTTON
    document.querySelector(".notificationButton").addEventListener('click',()=>{
      document.querySelector(".notifiaction__subMenu__invitaions").style.display = "none"
      document.querySelector(".notifiaction__subMenu__notifications").style.display = "block"
      document.querySelector(".notificationButton").style.background = "#003A61"
      document.querySelector(".notificationButton").children[0].style.color = "white"
      document.querySelector(".invitationButton").style.background= "white"
      document.querySelector(".invitationButton").children[0].style.color= "gray"
    })


    // notification click submenu
    document.querySelector(".userNotification").addEventListener('click',(e)=>{
      if(document.querySelector(".notification__subMenu").style.visibility != "visible" ) {
        document.querySelector(".notification__subMenu").style.visibility = "visible"
        document.querySelector(".CeateAccount").style.visibility = "hidden"
        document.querySelector(".emptyFavouriteList").style.visibility = "hidden"
      }
      else {
        document.querySelector(".notification__subMenu").style.visibility = "hidden"
      }
    })
