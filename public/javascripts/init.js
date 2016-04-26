function AnimateRotate(d,oa,or){
	var add = $(".ham");
	var remove = $(".lettuce");
    $({deg: 0}).animate({deg: d}, {
        duration: 500,
        step: function(now){
            add.css({
                 transform: "rotate(" + now + "deg)",
            });
            remove.css({
                 transform: "rotate(" + now + "deg)",
            });
        }
    });
    add.animate({
    	opacity: oa
    }, 400);
    remove.animate({
    	opacity: or
    }, 600);
}
(function(){
	$(document).ready(function(){
		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 1025) {
			$(".bread").click(function(event) {
				menu = $(".bread");
				if (menu.hasClass('active')) {
					menu.removeClass("active")
					$(".arrow-up").removeClass('active');
					$("nav").removeClass('active');
					AnimateRotate(360, 1, 0);
				} else {
					menu.addClass("active")
					$(".arrow-up").addClass('active');
					$(".mobile").addClass('active');
					AnimateRotate(-360, 0, 1);
				}
				event.stopPropagation();
			});
			$(".mobile .child").click(function(){
				event.stopPropagation();
			});
			$(".mobile .child.up").click(function(){
				menu = $(".bread");
					menu.removeClass("active")
					$(".arrow-up").removeClass('active');
					$("nav").removeClass('active');
					AnimateRotate(360, 1, 0);
					event.stopPropagation();
			});
		} else {
				$('a[href^="#"]').on('click', function(e) {
					e.preventDefault();
				});
		}
		// $("#search").ghostHunter({
	 //      results: "#results",
	 //      zeroResultsInfo     : false,
	 //      onKeyUp             : true,
	 //      rss             : "http://52.33.243.157/blog/rss/",
	 //      onComplete          : function( results ){
	 //        $( "#search" ).autocomplete({
	 //                source: results.map(function(item) {
	 //                    return {
	 //                        url: item['link'],
	 //                        value: item['title']
	 //                    }
	 //                }),
	 //                select: function( event, ui ) { 
	 //                    window.location.href = ui.item.url;
	 //                }
	 //        });
	 //    	}
		// }); 
	});
	
})();
// creates a animation loop
function doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime){
  fadeInOut(element,fadeInTime, visibleTime, fadeOutTime ,function(){
    setTimeout(function(){
      doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime);
    },pauseTime);
  });
}

// shorthand for in- and out-fading
function fadeInOut(element, fadeIn, visible, fadeOut, onComplete){
  return $(element).animate( {opacity:1}, fadeIn ).delay( visible ).animate( {opacity:0}, fadeOut, onComplete);
}