$(document).ready(function() {
    $(".clickable").click(function() {
      $("#card-word").fadeToggle();
      $("#card-definition").fadeToggle();
    });
  });