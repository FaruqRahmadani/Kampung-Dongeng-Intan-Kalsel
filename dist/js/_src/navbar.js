$(document).on('scroll', function(){
  $(document).scrollTop() > 50? $("nav").removeClass('navbar').addClass('navbar-scrolled'):$("nav").removeClass('navbar-scrolled').addClass('navbar')
})

$('.nav-link').on('click', function(e) {
  var target = $(this).attr('href')
  $('html, body').animate({
    scrollTop: $(target).offset().top - ($('nav').height() + parseInt($('nav').css("padding-top")) + parseInt($('nav').css("padding-bottom")))
  }, 1000)
  e.preventDefault()
})
