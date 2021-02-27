( function( $ ) {

  "use strict";

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

  $(document).mousemove(function(e){
    mouseX = e.clientX - 48;
    mouseY = e.clientY - 48;
  });

  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $(".cursor").css({left: xp +'px', top: yp +'px'});
  }, 20);

  $("a[href]").on("mouseenter", (function() {
    $(".circle").addClass("active");
  })),

  $("a[href]").on("mouseleave", (function() {
    $(".circle").removeClass("active");
  }))

}( jQuery ) );
