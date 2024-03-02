// click on the animation to repeat.

$(document).ready(function () {
  $("#city-at-night")
    .mouseleave(function () {
      $(this).removeClass("clicked");
    })
    .click(function () {
      $(this).addClass("clicked").html($(this).html());
    });
});
