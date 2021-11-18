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
  loop: true,
  centeredSlides: true,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
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
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
})
