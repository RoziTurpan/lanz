$(function(){

	$('.mask').width($(document).width()).height($(document).height());
	var navFlag = true;
	$('.nav').on('click', function(){
		if(navFlag){
			navFlag = false;
			$('.mask').fadeIn();
			$('header .menu').show();
		}else{
			navFlag = true;
			$('.mask').fadeOut();
			$('header .menu').hide();
		}
	});

	$(window).on('load resize', function(){
		if($(window).width() > 1200){
			location.href = '/index.html'
		}
	})
})