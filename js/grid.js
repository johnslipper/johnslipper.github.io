var $window = $(window);
var $boxes;

function resizeStuff(width) {
	if(width > 641) {
		// var height = (width / 3) * 1.2;
		// height = (height > 560) ? height : 560;
		// height = (height > 560 && height < 680) ? height : 680;
		// if(height > 560) { $boxes.height(height); }
		$boxes.height(600);
		// console.log(height);
	}
	else {
		$boxes.height("auto");
	}
}

$window.resize(function() {
	var width = $window.width();
	resizeStuff(width);
});

$(function() {
	$boxes = $(".js-me-preview, .js-post-preview");
	var width = $window.width();
	resizeStuff(width);
});