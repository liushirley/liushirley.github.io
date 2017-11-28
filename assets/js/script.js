$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors: ['experience', '1', 'blog'],
    sectionsColor: ['white', 'white', 'white', 'white', 'white'],
    scrollOverflow: true,
    responsiveWidth: 900,
    controlArrows: false,
    loopHorizontal: false,
    verticalCentered: false,
    scrollOverflowReset: true,
    resetSliders: true
    // onLeave: function(index, nextIndex, direction){
    //   $('.fp-scrollable').each(function() {
    //     var iScrollInstance = $(this).data('iscrollInstance');
    //     iScrollInstance.scrollTo(0,0, 2000);
    //   });
    // }
  });

  $(".moveUp").click(function() { // jQuery Function Number 1
    $.fn.fullpage.moveSectionUp();
  });

  $(".upArrow").click(function() {
    $.fn.fullpage.moveSectionUp();
  });

  $(".moveDown").click(function() {
    $.fn.fullpage.moveSectionDown();
  });

  $(".downArrow").click(function() {
    $.fn.fullpage.moveSectionDown();
  });

  $(".moveRight").click(function() {
    $.fn.fullpage.moveTo(2, 2);
  });

  $(".rightArrow").click(function() {
    $.fn.fullpage.moveTo(2, 1);
  });

  $(".moveLeft").click(function() {
    $.fn.fullpage.moveTo(2, 0);
  });

  $(".leftArrow").click(function() {
    $.fn.fullpage.moveTo(2, 1);
  });

  // $.fn.fullpage.setAutoScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);
  // $.fn.fullpage.setKeyboardScrolling(false);
  $.fn.fullpage.setScrollingSpeed(1700);

  $('.type').typeIt({
     strings: ["Software Engineer", "Student", "A dork", "Boba Addict", "A tall human bean"],
     speed: 175,
     breakLines: false,
     loop: true,
     startDelay: 150,
     deleteDelay: 1000,
     loopDelay: 900
  });

  $("#carousel-next").click(function() {
    let temp = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (temp <= -4800) {
      $("#carousel").css("margin-left", -4800); // jQuery Function Number 2
    } else {
      $("#carousel").css("margin-left", temp - 960);
    }
  });

  $("#carousel-prev").click(function() {
    let t = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (t >= 0) {
      $("#carousel").css("margin-left", 0);
    } else {
      $("#carousel").css("margin-left", t + 960);
    }
  });


  $("#carousel").hover( // jQuery Function Number 3
    function() {
      $("#carousel-next").fadeIn(200); // jQuery Function Number 4
      $("#carousel-prev").fadeIn(200);
    }, function() {
      $("#carousel-next").fadeOut(200); // jQuery Function Number 5
      $("#carousel-prev").fadeOut(200);
    }
  );

  $("#carousel-prev").hover(function() {
    $("#carousel-prev").fadeIn(200);
    $("#carousel-next").fadeIn(200);

  });

  $("#carousel-next").hover(function() {
    $("#carousel-next").fadeIn(200);
    $("#carousel-prev").fadeIn(200);

  });

/*-------------------------------------------------*/

  $("#carousel-next1").click(function() {
    let temp = parseInt($('#carousel1').css('margin-left').replace("px", ""));
    if (temp <= -4800) {
      $("#carousel1").css("margin-left", -4800);
    } else {
      $("#carousel1").css("margin-left", temp - 960);
    }
  });

  $("#carousel-prev1").click(function() {
    let t = parseInt($('#carousel1').css('margin-left').replace("px", ""));
    if (t >= 0) {
      $("#carousel1").css("margin-left", 0);
    } else {
      $("#carousel1").css("margin-left", t + 960);
    }
  });


  $("#carousel1").hover(
    function() {
      $("#carousel-next1").fadeIn(200);
      $("#carousel-prev1").fadeIn(200);
    }, function() {
      $("#carousel-next1").fadeOut(200);
      $("#carousel-prev1").fadeOut(200);
    }
  );

  $("#carousel-prev1").hover(function() {
    $("#carousel-prev1").fadeIn(200);
    $("#carousel-next1").fadeIn(200);

  });

  $("#carousel-next1").hover(function() {
    $("#carousel-next1").fadeIn(200);
    $("#carousel-prev1").fadeIn(200);

  });


  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    var top = $(this).scrollTop(); // jQuery Function Number 6
    if (top > 50) {
      $(".scrollTop").css("opacity", "1");

    } else {
      $(".scrollTop").css("opacity", "0");
    }

  }); 

  $(".scrollTop").click(function() {
    var scrollable = $('.fp-section').find('.fp-scrollable'); 

    var iScrollInstance = scrollable.data('iscrollInstance');
    iScrollInstance.scrollTo(0,0, 2000);
  });
});