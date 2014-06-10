var ajaxRequest;

function preAjaxLoad(category) {
	if(category) {
		var interval = 50;
		var $me = $('.js-me-preview');
		var $articles = $('#ajax article');

		if($me) { $me.addClass('closed'); }

		$('body, html').animate({ 'scrollTop': 0 });

		$articles.each(function(i, el) {
			var $el = $(el);
			if($el.hasClass(category)) {
				setTimeout(function() {
					$el.addClass('animated bounceOutDown');
					setTimeout(function() {
						$el.addClass('hidden');
					}, 1000);
					setTimeout(function() {
						$el.remove();
					}, 2000);
				}, i*interval);
			}
		});

	}
}

function ajaxLoad(url) {
	if(url) {
		if(ajaxRequest) { ajaxRequest.cancel(); }
		ajaxRequest = $.ajax({
			url: url,
		}).success(function(data) {
			if(data) {
				var $data = $(data);
				var $articles = $data.find('#ajax article');
				$articles.addClass('animated bounceInDown');
				$('#ajax').prepend($articles);
				setTimeout(function() {
					$articles.removeClass('animated bounceInDown');
				}, 1000);
			}
			ajaxRequest = null;
		});
	}
}

$(function() {
	if($('#ajax').length > 0) {
		$('nav a.ajax').on('click', function(e) {
			var $this = $(this);
			var category = $this.find('span').text().toLowerCase();
			var url = $this.attr('href');

			preAjaxLoad(category);
			ajaxLoad(url);

			return e.preventDefault();
		});
	}
});