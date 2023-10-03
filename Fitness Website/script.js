let menubar = document.querySelector(".menubar");
let navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle('fa-xmark')
  navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menubar.classList.remove('fa-xmark')
    navbar.classList.remove('active');
};


var swiper = new Swiper(".homeSlide", {
  spaceBetween: 20,
  effect: "fade",
  gradCursor: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  gradCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 20,
  gradCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});