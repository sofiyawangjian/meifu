
(function(){
$(".main_left ul div").eq(0).css("display","block").prev("li").css("background-position","0 -116px").find("span:eq(0)").css("background-position","15px -13px");
$(".main_left li span:nth-child(3)").click(function(){
	$(this).siblings("span").css("background-position","15px -13px").parent().css("background-position","0 -116px").siblings("li")
				.css("background-position","0 -80px").find("span:eq(0)").css("background-position","15px 12px");
	$(this).parent().next("div").slideDown(500).siblings("div").slideUp(500);
})	
	
})();

(function(){
	var tops;
	var moveH;
	$(document).scroll(function(){
		$(".main_left").height($(".main_left").find("a").height()+$(".main_left").find("ul").height())
		moveH=$("#main").height()-$(".main_left").height();
		tops=$("body").scrollTop();
		console.log(tops)
		
		if(tops>$("#main").offset().top+15){
			$(".main_left").addClass("fixT");
			if(tops>=$("#main").offset().top+15+moveH){
				$(".main_left").removeClass("fixT").addClass("absB");
			}else{
				$(".main_left").removeClass("absB").addClass("fixT");
			}
		}else{
			$(".main_left").removeClass("fixT absB");
		}
	})
	
	
})()







