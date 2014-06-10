$(function() {
	var $me = $('.js-me-preview');
	if(!readCookie('meClosed')) {
		$me.removeClass('closed no-animation');
	}
	if($me) {
		$me.find('.close').on('click', function() {
		$me.addClass('closed');
		createCookie('meClosed', 'true', 30);
		return false;
	});
	}

});