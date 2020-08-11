$(document).ready(function () {
  $(".toggleOne").click(function () {
    $("#card-word").toggle();
    $("#card-definition").toggle();
  });
  $(".toggleTwo").click(function () {
    $("#card-word-two").toggle();
    $("#card-definition-two").toggle();
  });
});

/*$('.card-body > p > span').click(function() {
    $(this) .parent().toggleClass('card-body');
    return false; */
