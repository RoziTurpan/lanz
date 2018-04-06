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

    /*判断滚动条滑动方向*/
    var direct = 0; //默认向下
    var scrollDirection = function(e){
    	e = e || window.event;
    	if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                direct = 1;
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                direct = 0;
            }  
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向上滚动时  
                direct = 0;
            }  
            if (e.detail< 0) { //当滑轮向下滚动时  
                direct = 1;
            }  
        }
    }
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
        document.addEventListener('DOMMouseScroll', scrollDirection, false);  
    }  
    //滚动滑轮触发scrollDirection方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollDirection;

    var navObj = $('header');
    var lH = navObj.offset().top;
    $(window).on('scroll', function() {
    	if(direct == 1){
    		if($(window).scrollTop() > lH){
	    		navObj.addClass('fixed-nav');
	    	}else {
	    		navObj.removeClass('fixed-nav');
	    	}
    	}else{
    		navObj.removeClass('fixed-nav');
    	}
    	
    });



})