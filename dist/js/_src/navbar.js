$('.nav-link').on('click', function(e) {
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top - 65
  }, 800);
  e.preventDefault();
});
