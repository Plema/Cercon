new Swiper('.equipment-technologies-slider', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

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
  spaceBetween: 20,

  autoHeight: true,
  loop: true,

  observer: true,
  observerParents: true,
  observerSliderChildren: true,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
  },
})
