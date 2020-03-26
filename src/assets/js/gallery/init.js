$(function() {
	
	sliderFn();

});

function sliderFn() {
	var slider = $(".contents .slider"),
		pager = slider.next();
	slider.bxSlider({
		mode: 'fade',
		pagerCustom: pager,
		auto:true,
		speed: 500,
		duration: 5000
	});
	
}