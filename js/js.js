// JavaScript Document
$(document).ready(function(){
	/*full导航下拉菜单*/
	$("#navcon ul>li").mouseover(function(){
		names=$(this).attr("name");//获得当前 li 的 name 值
		$("#nav").find("."+names).show();//从上一级找到 class 是当前 li 的 name 的值的下拉菜单
		offset=$(this).offset();//获得此 li 的坐标
		$("."+names).css({"top":(offset.top+43)+"px","left":offset.left+"px"});//确定此下拉菜单的位置
		$("."+names).mouseover(function(){
			$(this).show();//当经过此下拉菜单时，要显示
			$("#navcon ul>li[name="+names+"]").addClass("current");//并且 name 为此下拉菜单的class名的li添加类
			}).mouseout(function(){
				$(this).hide();//当离开此下拉菜单时，要显示
				$("#navcon ul>li[name="+names+"]").removeClass("current");//并且 name 为此下拉菜单的class名的li清除类
				})
	}).mouseout(function(){
		names=$(this).attr("name");//当离开时获得他的 name 值
		$("#nav").find("."+names).hide();//让 class 为此 name 的下拉菜单隐藏
		});
	/*index标签切换1*/
	$("#news ul:first").show().siblings("ul").hide();
	$("#news p span").mouseover(function(){
		$(this).addClass("now").siblings("span").removeClass("now");
		num=$(this).index();
		$("#news ul").eq(num).show().siblings("ul").hide();
		});
	/*index标签切换2*/
	$("#active dl:first").show().siblings("dl").hide();
	$("#huan p span").click(function(){
		$(this).addClass("now2").siblings("span").removeClass("now2");
		num=$(this).index();
		$("#active dl").eq(num).show().siblings("dl").hide();
		});
	/*index大图切换*/
	$("#away dl").mouseover(function(){
		which=$(this).index();
		if(!$("#banner").is(":animated"))
		$("#banner img").eq(which).fadeIn("slow").siblings("img").hide();//让其渐隐渐出
		$(this).addClass("come").siblings("dl").removeClass("come");
	});
	setInterval(function(){
		var a=$("#away .come").index();//获得当前 dl 的序列号
		var b=$("#away dl:last").index();//获得最后 dl 的序列号
		if(a==b){
			$("#away dl").eq(0).trigger("mouseover");//如果当前是最后一个dl，则让其模拟第一个mouseover
			}
			$("#away dl").eq(a+1).trigger("mouseover");//否则就模拟下一个dl的mouseover
	},5000);
	/*index小图切换*/
	$(".fla").each(function(){//遍历每一个fla
		var number=$(this).find("img").length;
		for(j=1;j<=number;j++){
			$(this).find(".page").append("<span>"+j+"</span>");//注意是在当前fla中寻找page
			}
		$(this).find(".page span:first").addClass("diyi");
		$(this).find(".page span").mouseover(function(){//经过当前的fla中的page中span时执行下面的函数
			spannum=$(this).index();
			$(this).parents(".fla").find("img").eq(spannum).show().siblings("img").hide();//注意要在先选择父级fla后才可以找到img
			$(this).addClass("diyi").siblings("span").removeClass("diyi");
		});
	})
	/*full购物车*/
	$("#car").hide();
	offs=$("#sou").offset();//获得搜索的坐标，以他为基准来定位购物车
	$("#jiesuan .go").click(function(){
		$("#car").show().css({"top":(offs.top+40)+"px","left":(offs.left+260)+"px"});
		});
		$("#car h2 img").click(function(){
			$("#car").hide();
			});
	/*login登陆的表单验证*/
	$(".must").after("<span class='red'>*</span>");
	$("#login form :input").focus(function(){
		$(this).next("strong").remove();
		if($(this).is("#usr")){
			if(this.value==""||this.value.length<6||this.value.length>32){
				$(this).after("<strong class='wrong'>用户名的长度应在6-32位之间</strong>");	
			}else{
				$(this).after("<strong class='right'>输入正确</strong>");
				}
		}
		if($(this).is("#pwd")){
			if(this.value==""||this.value.length<3||this.value.length>25){
				$(this).after("<strong class='wrong'>密码的长度应在3-25位之间</strong>");	
			}else{
				$(this).after("<strong class='right'>输入正确</strong>");
				}	
		}
	}).keyup(function(){
		$(this).trigger("focus");
		});			
	$("#denglu .sub").click(function(){
		$("#login form :input").trigger("focus");
		if($("#login form .wrong").length>0){
			return false;
			}
		alert("您已成功登陆，欢迎选购");
	});
	/*register注册的表单验证*/
	$("#zhucecon form :input").focus(function(){
		$(this).next("strong").remove();
		if($(this).is("#hao")){
			if(this.value==""||this.value.length<3||this.value.length>6){
				$(this).after("<strong class='wrong'>用户名在6-32位</strong>");	
			}else{
				$(this).after("<strong class='right'>输入正确</strong>");
				}	
		}
		if($(this).is("#pwd2")){
			if(this.value==""||this.value.length<3||this.value.length>25){
				$(this).after("<strong class='wrong'>（密码3-25位 区分大小写）</strong>");	
			}else{
				$(this).after("<strong class='right'>输入正确</strong>");
				}	
		}
		if($(this).is("#pwds")){
			if(this.value==""||this.value!=$("#pwd2").val()){
				$(this).after("<strong class='wrong'>两次密码输入要相同</strong>");	
			}else{
				$(this).after("<strong class='right'>输入正确</strong>");
				}
		}
	}).keyup(function(){
		$(this).trigger("focus");
		});			
	$("#zhucecon .subs").click(function(){
		$("#zhucecon form :input").trigger("focus");
		if($("#zhucecon form .wrong").length>0){
			return false;
			}
		alert("您已成功注册，欢迎进入登陆页面");
	});
	/*details颜色切换  小图标切换*/
	$("#tab img").mouseover(function(){
		yy=$(this).index();
		$(this).addClass("bian").siblings("img").removeClass("bian");
		$("#big .jqzoom").eq(yy).show().siblings(".jqzoom").hide();
		})
	$("#he .colorb").eq(0).show().siblings(".colorb").hide();//让第一种颜色（即为红色）的大图的盒子显示
	$("#zong .color:first").show().siblings(".color").hide();//让第一种颜色（红色）的中图和小图的盒子显示
	$(".color .jqzoom:first").show().siblings(".jqzoom").hide();//让显示的中图中的第一张中图显示
	$("#color a").click(function(){
		colornum=$(this).index();//获得当前点击的颜色图片的序列号
		$(".color").eq(colornum).find("#big .jqzoom").eq(0).show().siblings(".jqzoom").hide();//让对应的颜色的第一张中图显示
		$(this).addClass("a").siblings("a").removeClass("a");//当前的颜色链接a添加一个类
		$("#zong .color").eq(colornum).show().siblings(".color").hide();//让对应的中图和小图的盒子显示
		$("#he .colorb").eq(colornum).show().siblings(".colorb").hide();//让对一个的大图的盒子显示
	    $(".color").eq(colornum).find("#tab img").mouseover(function(){
			nums=$(this).index();//获得当前tab的序列号
			$(".color").eq(colornum).find("#big .jqzoom").eq(nums).show().siblings(".jqzoom").hide();//让对应的中图中的第nums个显示
			$(this).addClass("bian").siblings("img").removeClass("bian");//给当前的tab中的链接a添加一个类
			});
		});
	/*details左右箭头的切换*/
	var widths=$("#dlwrap").width();
	var page=1;
	var i=4;
	var num=$("#dl dl").length;
	var pagemax=Math.ceil(num/i);
	$("#you").click(function(){
		if(page==pagemax){
			$("#dl").animate({"left":"0"},1000);
			page=1;	
		}else{
			$("#dl").animate({"left":"-="+widths+"px"},1000);
			page++;
			}
	});
	$("#zuo").click(function(){
		if(page==1){
			$("#dl").animate({"left":"-"+widths*(pagemax-1)+"px"},1000);
			page=pagemax;
		}else{
			$("#dl").animate({"left":"+="+widths+"px"},1000);
			page--;
			}
	});
	/*women中的筛选标签切换*/
	$("#shaixuan .look:first").show().siblings(".look").hide();
	$("#women li").eq(1).addClass("qian");
	$("#women li").click(function(){
		xx=$(this).index();
		$(this).addClass("qian").siblings("li").removeClass("qian");
		$("#shaixuan .look").eq((xx-1)).show().siblings(".look").hide();
		});
});