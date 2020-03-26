$(function () {
    if( $('body').hasClass('Group') ){
	   toggleOn("#qna-list > li", "sib");
    }
});

/*단체예약 Q&A*/
function toggleOn(itm, type) {
	if (type == "sib") {
		$(itm).on('click', function () {
			var idx = $(this).index();
			
			$(this).toggleClass('on').siblings().removeClass('on');
			//console.log('on');
		});
	} else {
		$(itm).on('click', function () {
			var idx = $(this).index();
			$(this).toggleClass('on');
		});
	}
}
function popupOpen(itm) {
	$(itm).show(); 
	var itm; 
	popCenter();
	$(itm).on('scroll touchmove mousewheel', function(event){
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
}
function popupClose(itm) {
	$(itm).hide().off('scroll touchmove mousewheel');
}
