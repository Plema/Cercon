new Swiper('.work-examples-slider', {
  observer: true,
  observerParents: true,
  observerSliderChildren: true,

  //стрелки
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  //фракция
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

  //автовысота
  //   autoHeight: true,

  //количество слайдов для показа
  //   slidesPerView: 4,

  //   autoplay: {
  //     delay: 5000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: false,
  //   },

  speed: 700,

  //   effect: 'fade',

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      loop: false,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      autoHeight: true,
      loop: true,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      autoHeight: true,
      loop: true,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      autoHeight: true,
      loop: true,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      autoHeight: true,
      loop: true,
      spaceBetween: 30,
    },
  },
})
