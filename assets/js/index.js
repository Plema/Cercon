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

  $('.show-list').on('click', function () {
    $('.show-list').toggleClass('show-list-active')
    $('.tabs-inner-triggers__item').toggleClass('tabs-inner-triggers__item-show')
  })

  $('.tabs-inner-triggers__item').click(function (e) {
    e.preventDefault()

    $('.tabs-inner-triggers__item').removeClass('tabs-inner-triggers__item-active')
    $('.tabs-inner-triggers__item').removeClass('tabs-inner-triggers__item-show')
    $('.tabs-inner-content__item').removeClass('tabs-inner-content__item-active')

    $(this).addClass('tabs-inner-triggers__item-active')
    $($(this).attr('href')).addClass('tabs-inner-content__item-active')
    $('.show-list').removeClass('show-list-active')
  })
  $('.work-examples-triggers__item').click(function (e) {
    e.preventDefault()

    $('.work-examples-triggers__item').removeClass('work-examples-triggers__item-active')
    $('.work-examples-triggers__item').removeClass('tabs-inner-triggers__item-show')
    $('.work-examples-content__item').removeClass('work-examples-content__item-active')

    $(this).addClass('work-examples-triggers__item-active')
    $($(this).attr('href')).addClass('work-examples-content__item-active')
  })

  $('.work-examples-slider__text .text h6').each(function (i) {
    lengthText = $(this).text().length
    if (lengthText > 58) {
      $(this).text($(this).text().substr(0, 58) + '...')
    }
  })
  $('.work-examples-slider__text .text p').each(function (i) {
    lengthText = $(this).text().length
    if (lengthText > 154) {
      $(this).text($(this).text().substr(0, 154) + '...')
    }
  })
})
