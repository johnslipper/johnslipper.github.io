var $navEls;
var $postBody;
var toggleFixNav = false;

$(function() {

	$navEls = $('.js-post-nav, .tooltip');
	$postBody = $('.post-body');

	if($window.width() > 768 && $navEls.length > 0 && $postBody.length > 0) {
		if($postBody.height() > $window.height()) {
			toggleFixNav = true;
		}
	}

});

$window.on('scroll', function() {
	if(toggleFixNav) {
		if($window.scrollTop() > 420) {
			$navEls.addClass('fixed');
		}
		else {
			$navEls.removeClass('fixed');
		}
	}
});