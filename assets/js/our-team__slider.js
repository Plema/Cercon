new Swiper('.our-team-slider', {
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

  simulateTouch: false,
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

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    slideShadows: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        slideShadows: true,
      },
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 90,
        slideShadows: true,
        scale: 0.9,
      },
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        slideShadows: true,
        scale: 0.9,
      },
    },
  },

  observer: true,
  observerParents: true,
  observerSliderChildren: true,
})
// let ourTeamSlider = new Swiper('.our-team-slider', {
//   //стрелки
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },
//   //фракция
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },

//   simulateTouch: true,
//   touchRatio: 1,
//   touchAngle: 45,
//   grabCursor: false,
//   slideToClickedSlide: false,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   speed: 700,
//   loop: true,

//   effect: 'coverflow',
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 50,
//     slideShadows: true,
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//       centeredSlides: true,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: 0,
//         stretch: 120,
//         slideShadows: true,
//       },
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//       centeredSlides: true,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: 0,
//         stretch: 90,
//         slideShadows: true,
//         scale: 0.9,
//       },
//     },
//     1280: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//       centeredSlides: true,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: 0,
//         stretch: 100,
//         slideShadows: true,
//         scale: 0.9,
//       },
//     },
//   },

//   observer: true,
//   observerParents: true,
//   observerSliderChildren: true,
// })

// ourTeamSlider.on('touchStart', function () {
//   if (ourTeamSlider.activeIndex > ourTeamSlider.previousIndex) {
//     var active = $('.our-team-slider__slide.swiper-slide-active').data('link')
//     $('.our-team .text-content').removeClass('text-content-active')
//     $('.' + active).addClass('text-content-active')
//   }
// })
