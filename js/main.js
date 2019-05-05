$(document).ready(function() {
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


