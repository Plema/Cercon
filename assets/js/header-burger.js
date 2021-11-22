$(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active')
    $('.body').toggleClass('lock')
  })
  $('.close-menu').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active')
    $('.body').toggleClass('lock')
  })

  $('.menu-list__item .menu-link').on('click', function () {
    $('.menu-link').removeClass('menu-link__active')
    $(this).addClass('menu-link__active')
    setTimeout(function () {
      $('.body').removeClass('lock')
      $('.header-burger,.header-menu').removeClass('active')
    }, 250)
  })

  $('.lang-list  li').map(function (index, el) {
    if (!$(el).hasClass('current-lang')) {
      $(this).insertAfter($('.lang-list  li:last'))
    } else {
      $(this).find('a').attr('href', 'javascript:void(0)')
    }
  })
  $('.lang-list  .current-lang').click(function () {
    $('.lang-list  li').toggleClass('active')
  })
})
