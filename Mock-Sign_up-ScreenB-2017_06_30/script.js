$(document).ready(function(e) {

  // Make the image map responsive
  $("img[usemap]").rwdImageMaps();

  // Open/close drop-down menu
  $("#menu-button").on("click", function(){
    // Animation end triggers
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    // Check if the menu is already displayed
    if($("#menu").hasClass("hidden")){
      // Display the menu and background blur, enable animation
      $("#menu").removeClass("hidden").addClass("animated slideInDown").one(animationEnd, function(){
        // Disable animation on completion
        $(this).removeClass("animated slideInDown");
      });
      $(".image-blur").removeClass("hidden").addClass("animated fadeIn").one(animationEnd, function(){
        $(this).removeClass("animated fadeIn");
      });
    } else {
      // Remove the menu and background blur, enable animation
      $("#menu").addClass("animated slideOutUp").one(animationEnd, function(){
        // Disable animation on completion and hide the element
        $(this).removeClass("animated slideOutUp").addClass("hidden");
      });
      $(".image-blur").addClass("animated fadeOut").one(animationEnd, function(){
        $(this).removeClass("animated fadeOut").addClass("hidden");
      });
    }

  });

});