$(function(){

	$('.mask,header .menu').width($(document).width()).height($(document).height());
	var navFlag = true;
	$('.nav').on('click', function(){
		if(navFlag){
			navFlag = false;
			$('body').css('overflow-y','hidden');
			$('.mask').fadeIn();
			$('header .menu').show();
		}else{
			navFlag = true;
			$('body').css('overflow-y','auto');
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