$(document).on('scroll', function () {
  $(document).scrollTop() > 50 ? $("nav").removeClass('navbar').addClass('navbar-scrolled') : $("nav").removeClass('navbar-scrolled').addClass('navbar')
})

$('.nav-link').on('click', function (e) {
  var target = $(this).attr('href')
  $('html, body').animate({
    scrollTop: $(target).offset().top - ($('nav').height() + parseInt($('nav').css("padding-top")) + parseInt($('nav').css("padding-bottom")))
  }, 1000)
  e.preventDefault()
})


$('button.navbar-toggler').click(function () {
  if ($("nav").height() != 100) openNav()
  if ($("nav").height() != 0) closeNav()
})

function openNav(){
  $("nav").animate({ height: "100%" })
  $('.navbar-toggler').css('transform', 'rotateY(180deg)')
  setTimeout(function () {
    $('span', '.navbar-toggler').addClass('fa-times').removeClass('fa-bars')
  }, 250);
}

function closeNav(){
  $("nav").animate({ height: "0%" })
  $('.navbar-toggler').css('transform', 'rotateY(0deg)')
  setTimeout(function () {
    $('span', '.navbar-toggler').addClass('fa-bars').removeClass('fa-times')
  }, 250);
}
