import { Tooltip } from "bootstrap";

$(window).on("load resize", function () {
  $(".jumbotron-custom").css({
    height: $(window).height() + "px"
  });
})

// Tooltip
$('.avatar').tooltip();