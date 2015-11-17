$(document).ready(function ($) {

  window.scrollTo(0, 0);
  
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