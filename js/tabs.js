$(document).ready(function() {
	/* TABS - кастомные табы на jQuery*/
	// Скрываем все контейнеры кроме первого
	$('#ingredients-sections .ingredients-sections__wrapper:not(:first)').hide();

	// Обработчик на навигацию
	$('#tabs-nav li').click(function(event) {
		event.preventDefault();
		$('#ingredients-sections .ingredients-sections__wrapper').hide();
		$('#tabs-nav .current').removeClass("current");
		$(this).addClass('current');

		var clicked = $(this).find('a:first').attr('href');
		$('#ingredients-sections ' + clicked).fadeIn('fast');
	}).eq(0).addClass('current');
});