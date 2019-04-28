$(document).ready(function() {
	// НАВИГАЦИЯ!
	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#navigation-toggle');
	var menu = $('.navigation ul');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass('navigation__toggle-button--active');
	    
	});

	// При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 1900) {
	        menu.removeAttr('style');
	    }
	});

	//скрытие меню по клику
	var w = $(window).width(); //ширина
	if(w < 1900){
		$('nav.navigation a').on("click", function(){
			menu.slideToggle();
		});
	}
	/* Call plugins hrere ...*/

	// OwlCarousel
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

	// jQuery Validate JS
	$("#contact-form").validate({
		rules: {
			name: { required: true },
			subject: { required: true },
			email: { required: true, email: true },
			message: { required: true }
		},

		messages: {
			name: "Please enter your name",
			subject: "Please enter a subject",
			email: {
				required: "Please enter your email address",
				email: "The email address must be in the name@domain.com format. Perhaps you entered the email with an error."
			},
			message: "Please enter your message"
		},
		submitHandler: function(form) {
		  ajaxFormSubmit();
		}

	});
	$("#emailing").validate({
		rules: {
			email: { required: true, email: true }
		},

		messages: {
			email: {
				required: "Please enter your email address",
				email: "The email address must be in the name@domain.com format. Perhaps you entered the email with an error."
			}
		},
		submitHandler: function(form) {
		  ajaxFormSubmit();
		}

	});
	//slide2id - плавная прокрутка по ссылкам
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
});


