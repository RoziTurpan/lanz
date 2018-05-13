$(function() {
	/*
	$(".J_lazy img").lazyload({
		placeholder: "/images/project/no-pic.png",
		effect: "fadeIn", // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
		threshold: 100, // 提前开始加载
		// event: 'click', // 事件触发时才加载
		// container: $("#container"), // 对某容器中的图片实现效果
		// container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
		failurelimit: 10 // 图片排序混乱时
			// failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
	});
	*/
	
	/**
	* 移动端跳转
	*/
	// window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "/mobile/index.html" :  "/index.html";
	var ua = navigator.userAgent;
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(ua) && $(window).width() <= 720) {
		// location.href = '/mobile/index.html'
		console.log('1')
	}
	// let pageName = window.location.pathname.replace(/^\/pages\//,'/');
	let pageName = window.location.pathname;
	if (pageName.indexOf('index') > -1 || pageName === '/'){
		pageName = '/mobile' + pageName ;
	}else{
		pageName = pageName.replace(/^\/pages\//, '/mobile/');
	}
	console.log(pageName)
	/*$(window).on('load resize', function(){
		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(ua) && window.orientation === 0 || window.orientation === 180){
			location.href = window.location.origin + pageName.replace(/^\/pages\//,'/mobile/');
		}
	})*/
	window.addEventListener("orientationchange", function () {
		// alert(window.orientation)
		if (window.orientation === 0) {
			location.href = window.location.origin + pageName.replace(/^\/pages\//,'/mobile/');
		}
	})

})