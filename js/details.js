// JavaScript Document
	/*details放大镜*/
$(document).ready(function(){
	$(".jqzoom").jqueryzoom({
				xzoom:250, //放大图的宽度(默认是 200)
				yzoom:280, //放大图的高度(默认是 200)
				offset:5, //离原图的距离(默认是 5)
				position:"right", //放大图的定位(默认是 "right")
				preload:1   
	});
	$(".jqzoom>img").css({width:'423px',height:'284px'});
})
	