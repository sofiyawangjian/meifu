+(function(){
	$("#warp_wrap").load("gecck.html",function(){
		$.getScript("script/gwcck.js");
		$(".main_main").replaceAll(".main_maina");
	})
	
	
})()


/*支付方式*/
+(function(){
	$(".zffs_main_b li").eq(0).css({"background":"#F9F9F9","border-bottom-color":"#F9F9F9"});
	$(".zffs_main_b_yhk").eq(0).css("display","block");
	var flag=true;
	$(".zffs>p>span").click(function(){
		if(flag){
			$(this).text("【取消】");
			$(".zffs").css("background","#fffeed");
			$(".zffs_main_b").slideDown(500);
			$(".zffs_main_a").slideUp(500);
			flag=false;
		}else{
			$(this).text("【修改】");
			$(".zffs").css("background","white");
			flag=true;
			$(".zffs_main_b").slideUp(500);
			$(".zffs_main_a").slideDown(500);
		}
		
	})
	
	
	$(".zffs_main_b li").click(function(){
		$(this).css({
			"background":"#F9F9F9",
			"border-bottom-color":"#F9F9F9"
			}).siblings("li").css({
			"background":"white",
			"border-bottom-color":"#ccc"	
			})
			
		$(".zffs_main_b_yhk").eq($(this).index()).css("display","block").siblings(".zffs_main_b_yhk").css("display","none");	
	})
	
	$(".zffs_main_b_yhk input").click(function(){
		$(this).next("img").css("border-color","#E50048").siblings("img").css("border-color","transparent");
	})
	
	
})()
