var $greeting;

function showGreeting(msg) {
	if(msg && $greeting.length > 0) {
		$greeting.html(msg);
	}
}

function selectGreeting() {
	var data = [
    [0, 3, "Is it past midnight already?"],
    [3, 6, "It's far too early to be up yet!"],
    [6, 11, "Good morning!"],
    [11, 16, "Is it the afternoon already?"],
    [16, 19, "Good evening!"],
    [19, 24, "Greetings on this fine night"]
	],
	hr = new Date().getHours();

	for(var i=0; i<data.length;i++){
		if(hr >= data[i][0] && hr <= data[i][1]){
			showGreeting(data[i][2]);
			break;
		}
	}
}

$(function() {
	$greeting = $('.js-greeting');
	selectGreeting();
});