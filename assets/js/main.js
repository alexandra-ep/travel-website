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
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*======= SCROLL SECTIONS ACTIVE LINK =======*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*======= SCROLL REVEAL ANIMATION =======*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info,
         .discover__container,
         .experience__data, .experience__overlay,
         .place__card,
         .sponsor__content,
         .footer__data, .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
         .video__description,
         .subscribe__description`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about__img-overlay, 
         .video__content,
         .subscribe__form`,
  {
    origin: "right",
    interval: 100,
  }
);

/*======= DARK LIGHT THEME =======*/
