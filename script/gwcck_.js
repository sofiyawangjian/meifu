+(function(){
	$("#warp_wrap").load("gecck.html",function(){
		$.getScript("script/gwcck.js");
		$(".main_main").replaceAll($(".main_maina"));
	})
	
})()


+(function(){
	$(".like_mian ul").width(($(".like_mian li").eq(0).width()+23)*$(".like_mian li").length);
	var num=0;
	$(".like_btn_l").click(function(){
			if(!$(".like_mian ul").is(":animated")){
					num++;
					if(num==$(".like_mian li").length-4){
						num=1;
						$(".like_mian ul").css("left","40px");
					}
				$(".like_mian ul").animate({
					"left":-num*($(".like_mian li").eq(0).width()+23)+40+"px"
				})
			}
	})
	
	$(".like_btn_r").click(function(){
			if(!$(".like_mian ul").is(":animated")){
					
					if(num==0){
						num=$(".like_mian li").length-5;
						$(".like_mian ul").css("left",-num*($(".like_mian li").eq(0).width()+23)+40+"px");
					}
					num--;
				$(".like_mian ul").animate({
					"left":-num*($(".like_mian li").eq(0).width()+23)+40+"px"
				})	
			}
	})
	
})()
