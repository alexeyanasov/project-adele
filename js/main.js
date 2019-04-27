$(document).ready(function() {

	/* Call plugins hrere ...*/
	$("#slider_realman").owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		navigation : true,
		navigationText : ["<img src=\"img/prev.png\">","<img src=\"img/next.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		//transitionStyle : "backSlide"

		

	});
	$("#slider_testimonials").owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : true,
		stopOnHover : false,
		
		// Navigation
		navigation : false,
		navigationText : ["<img src=\"img/prev.png\">","<img src=\"img/next.png\">"],
		rewindNav : false,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		//transitionStyle : "backSlide"

		

	});
	/* TABS - кастомные табы на jQuery*/
	// Скрываем все контейнеры кроме первого
	$('#tabs-sections .section_block:not(:first)').hide();

	// Обработчик на навигацию
	$('#tabs-nav li').click(function(event) {
		event.preventDefault();
		$('#tabs-sections .section_block').hide();
		$('#tabs-nav .current').removeClass("current");
		$(this).addClass('current');

		var clicked = $(this).find('a:first').attr('href');
		$('#tabs-sections ' + clicked).fadeIn('fast');
	}).eq(0).addClass('current');
});


