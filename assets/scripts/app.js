let $ = document;

const menuBtn = $.querySelector(".menu-btn");
const sideMenu = $.querySelector(".side-menu");
const sideMenuOverlay = $.querySelector(".side-menu-overlay");
const closeBtn = $.querySelector(".close-button");
const darkModeBtn = $.querySelector(".dark-icon");
const progress = $.querySelector(".progress");
const progressBar = $.querySelector(".progress_bar");

function sideMenuOpening() {
    sideMenu.classList.add("active");
    sideMenuOverlay.classList.add("active");
}

function sideMenuClosing() {
    sideMenu.classList.remove("active");
    sideMenuOverlay.classList.remove("active");
}

function darkMode() {
    $.body.classList.toggle("dark");
}

function scrollBar() {
    const winScroll = window.pageYOffset;
    // console.log(winScroll)
    const scrollHighte =
    document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const scrolled = (winScroll / scrollHighte) * 100;
    console.log(scrolled);
    progressBar.style.width = scrolled + "%";
}

menuBtn.addEventListener("click", sideMenuOpening);
sideMenuOverlay.addEventListener("click", sideMenuClosing);
closeBtn.addEventListener("click", sideMenuClosing);
darkModeBtn.addEventListener("click", darkMode);
window.addEventListener("scroll", scrollBar);
