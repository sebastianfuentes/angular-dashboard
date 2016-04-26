$(document).ready(function(){
	if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.content.service').css("overflow", "hidden");
			$('.content-text').jScrollPane({
				hijackInternalLinks: true,
	      animateDuration:     1200,
				animateScroll: true
			});
			var api = $(".content-text").data('jsp');
			var throttleTimeout;
			$(window).bind('resize',function (){
				if (!throttleTimeout) {
					throttleTimeout = setTimeout(
						function()
						{
							api.reinitialise();
							throttleTimeout = null;
						},
						50
					);
				}
			});
			// setTimeout(function(){
			// 	$("#main").css('visibility', 'hidden')
			// }, 40)
			setTimeout(function(){
				$("#main").css('visibility', 'visible')
			}, 2000)
	} else {
		$('.content-text').jScrollPane({
			hijackInternalLinks: true,
      animateDuration:     1200,
			animateScroll: true
		});
		var api = $(".content-text").data('jsp');
		var throttleTimeout;
		$(window).bind('resize',function (){
			if (!throttleTimeout) {
				throttleTimeout = setTimeout(
					function()
					{
						api.reinitialise();
						throttleTimeout = null;
					},
					50
				);
			}
		});
		$(".content-text").bind('jsp-scroll-y',function(event, scrollPositionY){
			$(window).scrollTop(scrollPositionY);
			console.log(scrollPositionY,$(window).scrollTop());
		});
		// setTimeout(function(){
		// 	$("#main").css('visibility', 'hidden')
		// }, 40)
		setTimeout(function(){
			$("#main").css('visibility', 'visible')
		}, 2000)
	  var images = $("#slideshow .fader");
		var duration = 30; // duration in seconds
		var fadeAmount = 0.3; // fade duration amount relative to the time the image is visible
	  var numImages = images.size();
	  var durationMs = duration * 1000;
	  var imageTime = durationMs / numImages; // time the image is visible 
	  var fadeTime = imageTime * fadeAmount; // time for cross fading
	  var visibleTime = imageTime  - (imageTime * fadeAmount * 2);// time the image is visible with opacity == 1
	  var animDelay = visibleTime * (numImages - 1) + fadeTime * (numImages - 2); // animation delay/offset for a single image 
	  
	  images.each( function( index, element ){
	    if(index != 0){
	      $(element).css("opacity","0");
	      setTimeout(function(){
	        doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
	      },visibleTime*index + fadeTime*(index-1));
	    }else{
	      setTimeout(function(){
	        $(element).animate({opacity:0},fadeTime, function(){
	          setTimeout(function(){
	            doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
	          },animDelay )
	        });
	      },visibleTime);
	    }
	  });
	}
});
(function($) {
  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
$(".content-text").bind('jsp-scroll-y',function(event, scrollPositionY){
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
});