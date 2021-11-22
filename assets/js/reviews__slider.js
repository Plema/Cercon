let reviewsSlider = new Swiper('.reviews-slider', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: false,
  slideToClickedSlide: false,

  loop: false,
  speed: 700,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 30,
      loop: true,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 50,
      loop: true,
    },
  },
})

let reviewsSliderAllSlides = document.querySelector('.reviews-slider__total')
let reviewsSliderCurrentSlide = document.querySelector('.reviews-slider__current')

reviewsSliderAllSlides.innerHTML = reviewsSlider.slides.length

reviewsSlider.on('slideChange', function () {
  let currentSlide = ++reviewsSlider.realIndex
  reviewsSliderCurrentSlide.innerHTML = currentSlide
})
