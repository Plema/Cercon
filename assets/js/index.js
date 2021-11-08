let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

$(document).ready(function () {
  $('.anchor').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 700)
  })

  $('.tabs-triggers__item').click(function (e) {
    e.preventDefault()

    $('.tabs-triggers__item').removeClass('tabs-triggers__item-active')
    $('.tabs-content__item').removeClass('tabs-content__item-active')

    $(this).addClass('tabs-triggers__item-active')
    $($(this).attr('href')).addClass('tabs-content__item-active')
  })
})
