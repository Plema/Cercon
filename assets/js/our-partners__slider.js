new Swiper('.our-partners-slider', {
  observer: true,
  observerParents: true,
  observerSliderChildren: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: false,
  slideToClickedSlide: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  speed: 700,
  loop: false,
  centeredSlides: false,
  autoHeight: false,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: true,
    },
    1400: {
      slidesPerView: 4.6,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
})
