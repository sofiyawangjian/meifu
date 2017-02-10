(function(){
	$("header").load("header.html",function(){
		$.getScript("script/header.js");
	})
	$("#fonter").load("font.html");
	
})()




/*放大镜*/
+(function(){
	$(".fdj_big").mouseenter(function(){
		$(".fdj_move").css("display","block");
		$(".fdj_fd").css("display","block");
	})
	$(".fdj_big").mouseleave(function(){
		$(".fdj_move").css("display","none");
		$(".fdj_fd").css("display","none");
	})
	$(".fdj_big").mousemove(function(e){
		
		 var leftP=e.pageX-$(".fdj_big").offset().left-$(".fdj_move").width()/2;
		 var topP=e.pageY-$(".fdj_big").offset().top-$(".fdj_move").height()/2;
		if(leftP<=0){
			leftP=0;
		}
		if(topP<=0){
			topP=0;
		}
		if(leftP>=$(".fdj_big").width()-$(".fdj_move").width()){
			leftP=$(".fdj_big").width()-$(".fdj_move").width();
		}
		if(topP>=$(".fdj_big").height()-$(".fdj_move").height()){
			topP=$(".fdj_big").height()-$(".fdj_move").height();
		}
		
		$(".fdj_move").css({
			"left":leftP+"px",
			"top":topP+"px"
		})
		
		var blX=-leftP/$(".fdj_big").width()*$(".fdj_fd img").width()+"px";
		var blY=-topP/$(".fdj_big").height()*$(".fdj_fd img").height()+"px";
			$(".fdj_fd").css({"background-position-x":blX,"background-position-y":blY})	
	})	
})()

/*放大镜btn*/
+(function(){
	var bigImg=["url(images/shopxq/fdjbig1.jpg)","url(images/shopxq/fdjbig2.jpg)","url(images/shopxq/fdjbig3.jpg)","url(images/shopxq/fdjbig4.jpg)","url(images/shopxq/fdjbig1.jpg)"]
	var num=0;
	$(".fdj_small ul").width($(".fdj_small li").outerHeight()*($(".fdj_small li").length+1));
	
	$(".fdj_small li").mouseenter(function(){
		$(".fdj_big").css("background-image",bigImg[$(this).index()]);
		$(".fdj_fd").css("background-image",bigImg[$(this).index()]);
	})
	
	$(".fdj_small_btnL").on("click",btnL);
		
		function btnL(){
		if(!$(".fdj_small ul").is(":animated")){
			$(".fdj_small_btnR").css("background-position","-37px -20px").on("click",btnR);
			$(".fdj_small ul").animate({
			"left":"-=70px",
			"opacity":"0.7"
			},500,function(){
				num++;
				$(this).css("opacity",1);
				if(num==$(".fdj_small li").length-3){
					$(".fdj_small_btnL").off("click");
					$(".fdj_small_btnL").css("background-position","-57px -20px");					
				}
			})	
		}	
	}
	
	
	function btnR(){
		if(!$(".fdj_small ul").is(":animated")){
			$(".fdj_small_btnL").css("background-position","-28px -20px").on("click",btnL);
			$(".fdj_small ul").animate({
			"left":"+=70px",
			"opacity":"0.7"
			},500,function(){
				num--;
				$(this).css("opacity",1);
				if(num==0){
					$(".fdj_small_btnR").off("click");
					$(".fdj_small_btnR").css("background-position","-66px -20px");
				}
			})	
		}	
	}

/*fdj_font*/

	$(".fdj_font li").mouseenter(function(){
		$(this).next("div").css("display","block");
	})
	$(".fdj_font li").mouseleave(function(){
		$(this).next("div").css("display","none");
	})
	
})()

/*shop*/
+(function(){
	$(".shopxq_left .a").eq(0).css("display","block");
	$("#fhtop").css("left",$(".shopxq").offset().left+$(".shopxq").width()+"px");
	$(".shopxq_title li").slice(0,4).click(function(){
		$(this).css("background","#B7AB91").siblings().css("background-color","#999999");
		$(".shopxq_left .a").eq($(this).index()).css("display","block").siblings(".a").css("display","none");
	})
	
	var tops=0;
	$(document).scroll(function(){
		tops=$("body").scrollTop();
		if(tops>$(".shopxq_left").offset().top){
			$(".shopxq_title").css("position","fixed");
			$("#fhtop").css("display","block");
		}else{
			$(".shopxq_title").css("position","");
			$("#fhtop").css("display","none");
		}
		
	})
	
	$("#fhtop").click(function(){
		$("body").animate({scrollTop:0},500)
	})
	
})()



/*buy xq_size color*/
+(function(){
	$(".xq_size span").eq(0).css("border-color","#E50048");
	$(".xq_color span").eq(0).css("border-color","#E50048");
	$(".xq_size span").click(function(){
		$(this).css("border-color","#E50048").siblings("span").css("border-color","#CCCCCC");
	})
	$(".xq_color span").click(function(){
		$(this).css("border-color","#E50048").siblings("span").css("border-color","#CCCCCC");
	})
	
})()
