$(document).ready(function () {
  $('.partners-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    speed: 700,
    easing: 'linear',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.67,
          centerMode: true,
        },
      },
    ],
  })
})
