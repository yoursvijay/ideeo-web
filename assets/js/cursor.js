$(window).mousemove(function(e) {     
    $(".cursor").css({
      left: e.pageX,
      top: e.pageY
    })    
  });
  $(window).mousemove(function(e) {
    $("a, .active-cursor")
      .on("mouseenter", function() {   
      $('.cursor').addClass("activecursor")   
    })  
  });
  $(window).mousemove(function(e) {
    $("a, .active-cursor")
      .on("mouseleave", function() {    
      $('.cursor').removeClass("activecursor")    
    })
  });