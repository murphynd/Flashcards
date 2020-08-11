$(document).ready(function() {
  $(".toggleOne").click(function() {
    $("#card-word").fadeToggle();
    $("#card-definition").fadeToggle();
  });
  $(".toggleTwo").click(function() {
    $("#card-word-two").fadeToggle();
    $("#card-definition-two").fadeToggle();
  });
});
  
/*$('.card-body > p > span').click(function() {
    $(this) .parent().toggleClass('card-body');
    return false; */
