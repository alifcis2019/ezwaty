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
    const togglescrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }));
}


// user log in submenu (create Account)

document.querySelector(".userLogin").addEventListener('click', (e) => {
    if (document.querySelector(".CeateAccount").style.visibility != "visible") {
        document.querySelector(".CeateAccount").style.visibility = "visible"
        document.querySelector(".notification__subMenu").style.visibility = "hidden"
        document.querySelector(".emptyFavouriteList").style.visibility = "hidden"
    }
    else {
        document.querySelector(".CeateAccount").style.visibility = "hidden"
    }
})


// wishlist click submenu
document.querySelector(".userWishlist").addEventListener('click', (e) => {
    if (document.querySelector(".emptyFavouriteList").style.visibility != "visible") {
        document.querySelector(".emptyFavouriteList").style.visibility = "visible"
        document.querySelector(".notification__subMenu").style.visibility = "hidden"
        document.querySelector(".CeateAccount").style.visibility = "hidden"
    }
    else {
        document.querySelector(".emptyFavouriteList").style.visibility = "hidden"
    }
})


// INVITATION BUTTON
document.querySelector(".invitationButton").addEventListener('click', () => {
    document.querySelector(".notifiaction__subMenu__notifications").style.display = "none"
    document.querySelector(".notifiaction__subMenu__invitaions").style.display = "block"
    document.querySelector(".invitationButton").style.background = "#003A61"
    document.querySelector(".invitationButton").children[0].style.color = "white"
    document.querySelector(".notificationButton").style.background = "white"
    document.querySelector(".notificationButton").children[0].style.color = "gray"
})
// NOTIFICATION BUTTON
document.querySelector(".notificationButton").addEventListener('click', () => {
    document.querySelector(".notifiaction__subMenu__invitaions").style.display = "none"
    document.querySelector(".notifiaction__subMenu__notifications").style.display = "block"
    document.querySelector(".notificationButton").style.background = "#003A61"
    document.querySelector(".notificationButton").children[0].style.color = "white"
    document.querySelector(".invitationButton").style.background = "white"
    document.querySelector(".invitationButton").children[0].style.color = "gray"
})


// notification click submenu
document.querySelector(".userNotification").addEventListener('click', (e) => {
    if (document.querySelector(".notification__subMenu").style.visibility != "visible") {
        document.querySelector(".notification__subMenu").style.visibility = "visible"
        document.querySelector(".CeateAccount").style.visibility = "hidden"
        document.querySelector(".emptyFavouriteList").style.visibility = "hidden"
    }
    else {
        document.querySelector(".notification__subMenu").style.visibility = "hidden"
    }
})

// empty favourite list

document.querySelector(".close__emptyFavouriteList").addEventListener('click',()=>{
    document.querySelector('.emptyFavouriteList').style.visibility = "hidden"
})


// close__favouriteList

document.querySelector(".close__favouriteList").addEventListener('click',()=>{
    document.querySelector('.favouriteList').style.visibility = "hidden"
})

// close__notification

document.querySelector(".close__notification__subMenu").addEventListener('click',()=>{
    document.querySelector('.notification__subMenu').style.visibility = "hidden"
})


// navbar Tab on mobile Handle

let open =false
document.querySelector(".navbarTab").addEventListener('click', (e) => {
    if(!open){
        document.querySelector(".navbarThree__subMenu").style.left = "0%"
        open=true
    }
    else {
        document.querySelector(".navbarThree__subMenu").style.left="-100%"
        open = false
    }
}
)

document.querySelector(".navbarClose").addEventListener('click', () => {
    open = false
    document.querySelector(".navbarThree__subMenu").style.left = "-100%";
})


