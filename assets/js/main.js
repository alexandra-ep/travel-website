/*======= SHOW MENU =======*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*==== MENU SHOW ====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*==== MENU HIDDEN ====*/
/* Validate if constant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*======= REMOVE MENU MOBILE =======*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When clicking on each link, the show-menu class is removed
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======= CHANGE BACKGROUND HEADER =======*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is great than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*======= SWIPER DISCOVER =======*/
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

/*======= VIDEO =======*/
const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play video
    videoFile.play();

    // Change the icon from play to pause
    videoIcon.classList.add("ri-pause-fill");
    videoIcon.classList.remove("ri-play-fill");
  } else {
    // Pause video
    videoFile.pause();

    // Change the icon from pause to play
    videoIcon.classList.remove("ri-pause-fill");
    videoIcon.classList.add("ri-play-fill");
  }
}

videoButton.addEventListener("click", playPause);

function finalVideo() {
  // Video ends, icon changes
  videoIcon.classList.remove("ri-pause-fill");
  videoIcon.classList.add("ri-play-fill");
}

videoFile.addEventListener("ended", finalVideo);

/*======= SHOW SCROLL UP =======*/

/*======= SCROLL SECTIONS ACTIVE LINK =======*/
/*======= SCROLL REVEAL ANIMATION =======*/
/*======= DARK LIGHT THEME =======*/
