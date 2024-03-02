// click on the coffee express to see the animation again.

$(document).ready(function () {
  $("#coffee-express")
    .mouseleave(function () {
      $(this).removeClass("clicked");
    })
    .click(function () {
      $(this).addClass("clicked").html($(this).html());
    });
});
