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
			location.href = '/en/index.html'
		}
	})

	/*判断滚动条滑动方向*/
	var direct = 1; // 默认往下
	var startX, startY, X, Y;
	$("body").on("touchstart", function (e) {
		e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
	});
	$("body").on("touchmove", function (e) {
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;

		if (Math.abs(X) > Math.abs(Y) && X > 0) {
			// alert("left 2 right");
		}
		else if (Math.abs(X) > Math.abs(Y) && X < 0) {
			// alert("right 2 left");
		}
		else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
			// alert("top 2 bottom");
			direct = 1;
		}
		else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
			// alert("bottom 2 top");
			direct = 0;
		}
		else {
			// alert("just touch");
		}
	});

	var navObj = $('header');
	var lH = navObj.offset().top;
	window.addEventListener('scroll', function () {
		if (direct == 1) {
			if ($(window).scrollTop() > lH) {
				navObj.addClass('fixed-nav');
			} else {
				navObj.removeClass('fixed-nav');
			}
		} else {
			navObj.removeClass('fixed-nav');
		}
	})
})