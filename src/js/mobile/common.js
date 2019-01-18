$(function() {
	
	headFunc();
	scrollFunc();
	
});

function headFunc () {
	var navTab	= $(".nav-tab"),
		gnb		= $(".gnb"),
		bgDrop	= $(".bg-drop");
	navTab.click(function() {
		gnb.addClass("on");
	});
	gnb.find(".bg-drop, .i-x").click(function() {
		gnb.removeClass("on");
	});
}

function scrollFunc () {
	var btnTop	= $(".btn-top"),
		top		= $(".visual .slide").height();
	$(window).scroll(function() {
		var scr = $(window).scrollTop();
		if ( scr > top ) {
			btnTop.fadeIn();
		} else {
			btnTop.fadeOut();
		}
	});
}