$(document).ready(function ($) {
  //navigation bar code
  
  nav = $('.nav');
  navHeight = nav.height();
  navOffset = nav.offset();

  navSpacer = $('.navSpacer').css('height', navHeight);

  function checkScroll() {
    scroll = $(document).scrollTop();
    if (scroll > navOffset.top) {
      nav.css('position', 'fixed').css('top', '0');
      navSpacer.show();
    } else {
      nav.css('position', '').css('top', '');
      navSpacer.hide();
    }
    max = 0;
    current = undefined;
    $('.page').each(function(i) {
      offset = $(this).offset().top - navHeight * 2.5;
      if ((offset > max) && (scroll > offset)) {
        max = offset;
        current = $(this);
      }
    });
    $('.navButton').removeClass('active');
    if ((max > 0) && (current !== undefined)) {
      $('.navButton[href="#' + current.attr('id') + '"]').addClass('active');
    } else {
      $('.navButton[href="#top"]').addClass('active');
    }
  }
  
  $( window ).scroll(checkScroll);
  checkScroll();

  $('.nav .navButton, .intLink').each(function(i) {
      $(this).click(function(e) {
        e.preventDefault();
        scrollTo = 0;
        if ($(this).attr('href') != '#top') {
          scrollTo = $($(this).attr('href')).offset().top - navHeight + 2;
        }
        $('html, body').animate({
          scrollTop: scrollTo
        });
      });
  });


  //slider code  
  var _SlideshowTransitions = [
    //Fade
    { $Duration: 1200, $Opacity: 2 }
  ];

  var jssor_1_options = {
    $AutoPlay: true,
    $FillMode: 5,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      Transitions: _SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };
  
  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  
  //responsive code begin
  //you can remove responsive code if you don't want the slider scales while window resizes
  function ScaleSlider() {
      var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
      if (refSize) {
          refSize = Math.min(refSize, 600);
          jssor_1_slider.$ScaleWidth(refSize);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }
  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end
});