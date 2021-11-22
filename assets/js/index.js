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

  $('.read-more-btn').click(function () {
    $('.text-list').find('.show-list').toggleClass('show-list__active')
    $('.read-more-text').toggleClass('active')
    $('.hide-text').toggleClass('active')
  })

  $('.our-team-slider .button-next').on('click', function () {
    var active = $('.our-team-slider__slide.swiper-slide-active').data('link')
    $('.our-team .text-content').removeClass('text-content-active')
    $('.' + active).addClass('text-content-active')
  })
  $('.our-team-slider .button-prev').on('click', function () {
    var active = $('.our-team-slider__slide.swiper-slide-active').data('link')
    $('.our-team .text-content').removeClass('text-content-active')
    $('.' + active).addClass('text-content-active')
  })

  $('.reviews-slider .button-next').on('click', function () {
    var active = $('.reviews-slider__slide.swiper-slide-active').data('link')
    $('.reviews .reviews-text-content').removeClass('reviews-text-content__active')
    $('.' + active).addClass('reviews-text-content__active')
  })
  $('.reviews-slider .button-prev').on('click', function () {
    var active = $('.reviews-slider__slide.swiper-slide-active').data('link')
    $('.reviews .reviews-text-content').removeClass('reviews-text-content__active')
    $('.' + active).addClass('reviews-text-content__active')
  })

  $('.anchor').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 700)
  })

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $('.modall-body')
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active-modall')
        $('.modall').removeClass('active-modall')
        $('.body').removeClass('showing-modal')
      }
    })
  })
  $('.close, .btn-close').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').removeClass('showing-modal')
    $('.modall-body ').removeClass('active')
  })

  $('.request-call').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').addClass('showing-modal')
    $('.modall-request-call').addClass('active-modall')
    setTimeout(function () {
      $('.modall-body ').addClass('active')
    }, 200)
  })
  $('.thx-you').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').addClass('showing-modal')
    $('.modall-thx').addClass('active-modall')
    setTimeout(function () {
      $('.modall-body ').addClass('active')
    }, 200)
  })

  $('.work-order-btn').on('click', function () {
    $('.modall').removeClass('active-modall')
    $('.body').addClass('showing-modal')
    $('.modall-work-order').addClass('active-modall')
    setTimeout(function () {
      $('.modall-body ').addClass('active')
    }, 200)
  })

  $(function () {
    $('*[placeholder="Телефон"]*').mask('+7 (000) 000 - 00 - 00')
  })
  $(function () {
    $('*[placeholder="Ваш телефон"]*').mask('+7 (000) 000 - 00 - 00')
  })

  $('.select').each(function () {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450 // длительность анимации

    _this.hide()
    _this.wrap('<div class="select-inner"></div>')
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text(),
    }).insertAfter(_this)

    const selectHead = _this.next('.new-select')
    $('<div>', {
      class: 'new-select__list',
    }).insertAfter(selectHead)

    const selectList = selectHead.next('.new-select__list')
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList)
    }

    const selectItem = selectList.find('.new-select__item')
    selectList.slideUp(0)
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on')
        selectList.slideDown(duration)

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value')

          $('select').val(chooseItem).attr('selected', 'selected')
          selectHead.text($(this).find('span').text())

          selectList.slideUp(duration)
          selectHead.removeClass('on')
        })
      } else {
        $(this).removeClass('on')
        selectList.slideUp(duration)
      }
    })
  })

  $('.main_input_file').change(function () {
    var f_name = []

    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      f_name.push($(this).get(0).files[i].name)
    }

    $('#f_name').val(f_name.join(', '))
  })
})
