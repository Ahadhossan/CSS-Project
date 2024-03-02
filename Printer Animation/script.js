// double click on the paper to see the animation again.

$(document).ready(function () {
  $("#printer-animation")
    .mouseleave(function () {
      $(this).removeClass("clicked");
    })
    .dblclick(function () {
      $(this).addClass("clicked").html($(this).html());
    });
});
