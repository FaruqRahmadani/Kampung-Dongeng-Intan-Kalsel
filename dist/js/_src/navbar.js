$('.nav-link').on('click', function(e) {
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top - ($('.navbar').height() + parseInt($('.navbar').css("padding-top")) + parseInt($('.navbar').css("padding-bottom")))
  }, 1000);
  e.preventDefault();
});
