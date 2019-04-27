$(document).ready(function() {
	$("#contact-email").validate({
		rules: {
			email: { required: true, email: true }
		},

		messages: {
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
			}
		},
		submitHandler: function(form) {
		  ajaxFormSubmit();
		}

	});
});


