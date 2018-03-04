$(function(){

	$('.mask').width($(window).width()).height($(window).height());
	var navFlag = true;
	$('.nav').on('click', function(){
		if(navFlag){
			$('.mask').fadeIn();
			navFlag = false;
		}else{
			$('.mask').fadeOut();
			navFlag = true;
		}
	})
})