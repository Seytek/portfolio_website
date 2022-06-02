window.onscroll = function showHeader() { // The function will work on scroll(when user will scroll down or scroll up)
    let header = document.querySelector(".header"); // give the variable 'header' a class .header

    if(window.pageYOffset > 200) { // if scroll will be bigger than 200px variable header will get a class .fixed
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}