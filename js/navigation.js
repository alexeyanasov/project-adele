$(document).ready(function() {
	// НАВИГАЦИЯ!
	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#navigation-toggle');
	var menu = $('.navigation ul');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
		// Смена иконки бургера на крестик
		if( $('.navigation-toggle .fa').hasClass('fa-bars')){
			$('.navigation-toggle .fa').removeClass('fa-bars');
			$('.navigation-toggle .fa').addClass('fa-times');
		}else{
			$('.navigation-toggle .fa').removeClass('fa-times');
			$('.navigation-toggle .fa').addClass('fa-bars');
		}
		// !Смена иконки бургера на крестик


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
	    if(w > 4000) {
	        menu.removeAttr('style');
	    }
	});

	//скрытие меню по клику
	var w = $(window).width(); //ширина
	if(w < 4000){
		$('nav.navigation a').on("click", function(){
			menu.slideToggle();
			// Смена иконки бургера на крестик
			if( $('.navigation-toggle .fa').hasClass('fa-bars')){
				$('.navigation-toggle .fa').removeClass('fa-bars');
				$('.navigation-toggle .fa').addClass('fa-times');
			}else{
				$('.navigation-toggle .fa').removeClass('fa-times');
				$('.navigation-toggle .fa').addClass('fa-bars');
			}
			// ! Смена иконки бургера на крестик
		});
	}
	/* Call plugins hrere ...*/

});