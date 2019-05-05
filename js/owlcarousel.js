$(document).ready(function() {
	// OwlCarousel
	$("#slider-realman").owlCarousel({

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
		navigation : true,
		navigationText : ["<img src=\"img/icon/prev.png\">","<img src=\"img/icon/next.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		//Transitions
		//transitionStyle : "backSlide"
	});
	$("#slider-testimonials").owlCarousel({

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
});