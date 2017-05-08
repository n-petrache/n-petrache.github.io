/*
En cliquant sur la section Compétences :
les div .window disparaissent en glissant,
et la div #compContainer apparaît en glissant
*/
$('document').ready(function () {
  var sound1 = document.getElementById('cursor');
  var sound2 = document.getElementById('item');
  $("a").click(function(){
      sound2.play();
  });
  $("#home").click(function(){
    sound1.play();
    $(".window").slideUp();
    $(".mainContain").slideDown();
  });
  $("#comp").click(function(){
    sound1.play();
    $(".window").slideUp();
    $("#compContain").slideDown().css("display", "inline-block");
  });
  $("#exp").click(function(){
    sound1.play();
    $(".window").slideUp();
    $("#expContain").slideDown().css("display", "inline-block");
  });
  $("#degree").click(function(){
    sound1.play();
    $(".window").slideUp();
    $("#degreeContain").slideDown().css("display", "inline-block");
  });
  $("#profile").click(function(){
    sound1.play();
    $(".window").slideUp();
    $("#profileContain").slideDown().css("display", "inline-block");
  });
  $("#contact").click(function(){
    sound1.play();
    $(".window").slideUp();
    $("#contactContain").slideDown().css("display", "inline-block");
  });
  
//  $("#home").click(function(){
//    sound1.play();
//    $(".window").fadeOut(function() {
//        $(".mainContain").delay(1000).fadeIn();
//    });
//  });
//  $("#comp").click(function(){
//    sound1.play();
//    $(".window").fadeOut(function() {
//        $("#compContain").delay(1000).fadeIn();
//    });
//  });
//  $("#exp").click(function(){
//    sound1.play();
//    $(".window").fadeOut(function() {
//        $("#expContain").delay(1000).fadeIn();
//    });
//  });
//  $("#degree").click(function(){
//    sound1.play();
//    $(".window").fadeOut(function() {
//        $("#degreeContain").delay(1000).fadeIn();
//    });
//  });
//  $("#profile").click(function(){
//    sound1.play();
//    $(".window").fadeOut(function() {
//        $("#profileContain").delay(1000).fadeIn();
//    });
//  });
//  $("#contact").click(function(){
//    sound1.play();
//    $(".window").fadeOut(function() {
//        $("#contactContain").delay(1000).fadeIn();
//    });
//  });
});
