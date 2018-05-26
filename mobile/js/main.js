window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
	const errObj = {
		errorMessage: errorMessage,
		scriptURI: scriptURI,
		lineNumber: lineNumber,
		errorObj: errorObj,
		userAgent: window.navigator.userAgent,
		status: 0
	};
	$.ajax({
		url: 'http://111.230.25.238/error',
		type: 'POST',
		data: errObj,
		success: function (data) {
			//console.log(data)
		},
		error: function (err) {
			console.log(err)
		}
	})
	//console.log(errObj)
}

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

	let pageName = window.location.pathname;
	console.log(pageName)
	$(window).on('load resize', function(){
		// if($(window).width() > 1200){
		// 	location.href = '/index.html'
		// }
		/* if (pageName.indexOf('index') > -1 || pageName === '/mobile/'){
			pageName = pageName.replace(/^\/mobile\//, '/');
		}else{
			pageName = pageName.replace(/^\/mobile\//, '/pages/');
		}
		if (window.orientation === 90 || window.orientation === 270 && $(window).width() >= 720) {
			location.href = window.location.origin + pageName;
		} */
	})

	/* window.addEventListener("orientationchange", function () {
		window.location.reload();
		if (pageName.indexOf('index') > -1 || pageName === '/mobile/') {
			pageName = pageName.replace(/^\/mobile\//, '/');
		} else {
			pageName = pageName.replace(/^\/mobile\//, '/pages/');
		}
		if (window.orientation === 90 || window.orientation === -90) {
			location.href = window.location.origin + pageName;
		}
	}, false); */

	/*判断滚动条滑动方向*/
	var direct = 1; // 默认往下
	var startX, startY, X, Y;
	$("body").on("touchstart", function (e) {
		// e.preventDefault();
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
	});
	$("body").on("touchmove", function (e) {
		// e.preventDefault();
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