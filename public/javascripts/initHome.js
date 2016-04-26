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
function resizeHeightIntro(){
	if ($(window).width() < 1025) {
		$('.intro.tablet').css('height', ($(window).height() - 20)+'px')
	}
}
(function(){
	$(document).ready(function(){
		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 1025) {
			resizeHeightIntro();
			$('.arrow-mobile').click(function(event) {
				$('.intro .wrapper').animate({
					left:'-100%'
				},700);
				$('.go-back').animate({
					left:'0'
				},700);
			});
			$('.go-back').click(function(event) {
				$('.intro .wrapper').animate({
					left:'0'
				},700);
				$('.go-back').animate({
					left:'-3em'
				},700);
			});
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
			});
			$(".mobile .child").click(function(){
				event.stopPropagation();
			});
			$(".mobile .child.up").click(function(){
				menu = $(".bread");
				if (menu.hasClass('active')) {
					menu.removeClass("active")
					$(".arrow-up").removeClass('active');
					$("nav").removeClass('active');
					AnimateRotate(360, 1, 0);
				}
				event.stopPropagation();
			});
			$(".check-blog").click(function(){
				if ($(this).hasClass('active')) {
					$(this).removeClass("active")
					$(".arrow").animate({
						left: "34.5em",},
						300);
					$(".welcome").animate({
						left: "0",},
						300);
					$(".header-left").removeClass('active')
					$(".header-left").addClass("unactive")
					$(".hack").removeClass('invisible')
					$(".blog").removeClass("active")
				} else{
					$(this).addClass("active")
					$(".arrow").animate({
						left: "39.5em",},
						300);
					$(".welcome").animate({
						left: "-30em",},
						300);
					$(".header-left").removeClass("unactive");
					$(".header-left").addClass('active');
					$(".hack").addClass('invisible');
					$(".blog").addClass("active")
				}
			});
			$(".blog").click(function(){
				$(".check-blog").addClass("active")
					$(".arrow").animate({
						left: "39.5em",},
						300);
					$(".welcome").animate({
						left: "-30em",},
						300);
				$(".header-left").removeClass("unactive");
				$(".header-left").addClass('active');
				$(".blog").addClass("active");
				$(".hack").addClass('invisible');
			});
			$(".hack").click(function(){
				if ($(this).hasClass('invisible')) {
					$(this).removeClass("active")
					$(".arrow").animate({
						left: "34.5em",},
						300);
					$(".welcome").animate({
						left: "0",},
						300);
					$(".header-left").removeClass('active')
					$(".header-left").addClass("unactive")
					$(".hack").removeClass('invisible')
					$(".check-blog").removeClass("active")
					$(".blog").removeClass("active")
				} else {	
					$(".check-blog").addClass("active")
					$(".arrow").animate({
						left: "39.5em",},
						300);
					$(".welcome").animate({
						left: "-30em",},
						300);
					$(".header-left").removeClass("unactive")
					$(".header-left").addClass('active')
					$(".hack").addClass('invisible')
					$(".blog").addClass("active")
				}
				$('a[href^="#"]').on('click', function(e) {
					e.preventDefault();
				});
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
$(document).ready(function() {
		$('html').scroll(function(){console.log('test');})
		// $('a[href^="#"].navigate').on('click', function(e) {
		// 	console.log('test');
		// 			e.preventDefault();
		// 			var target = this.hash;
		// 			target = target.replace(/#/g, '');
		// 			$.fn.fullpage.moveTo(target, 0);
		// 			$('.dot').html("radio_button_unchecked");
		// 		});
    $('#fullpage').fullpage({
      // showActiveTooltip: true,
      navigation: true,
     	navigationPosition: 'left',
      // navigationTooltips: ['Home', 'Our origins', 'Our team', 'Services', 'Clients', 'Contact us'],
      paddingTop: '2.5em',
			responsiveWidth: 1025,
			responsiveHeight: 641,
      onLeave: function(i,n){
      	$(".arrow").animate({
						left: "	34.5em",},
						300);
				$(".welcome").animate({
					left: "0",},
					300);
				$(".header-left").removeClass('active')
				$(".header-left").addClass("unactive")
				$(".hack").removeClass('invisible')
				$(".check-blog").removeClass("active")
				$(".blog").removeClass("active")
				$(".hack").addClass('invisible');
      },
      afterResize: function(){
      	resizeHeightIntro();
      	$(".arrow").animate({
						left: "	34.5em",},
						300);
				$(".welcome").animate({
					left: "0",},
					300);
				$(".header-left").removeClass('active')
				$(".header-left").addClass("unactive")
				$(".hack").removeClass('invisible')
				$(".check-blog").removeClass("active")
				$(".blog").removeClass("active")
				$(".hack").addClass('invisible');
      },
     	afterLoad: function(a,i){
     		$("."+i).html("radio_button_checked")
     	}
    });
});
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