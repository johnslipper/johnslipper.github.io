var $window = $(window);
var $body;
var $header;

$(document).foundation();

$window.scroll(function() {
	if($window.scrollTop() > 100) {
		$header.addClass('compact');
	}
	else {
		$header.removeClass('compact');
	}
});

$(function() {

	$body = $('body');
	$header = $('header');

});

//@codekit-append('cookies.js');
//@codekit-append('ajax.js');
//@codekit-append('home.js');
//@codekit-append('post.js');
//@codekit-append('greeting.js');
