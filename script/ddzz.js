(function(){
	$("header").load("header.html",function(){
		$.getScript("script/header.js");
	});
	$("#fonter").load("font.html");
	
	$("#content").load("oder.html",function(){
		$.getScript("script/oder.js");
		$(".main_rihgt").replaceAll(".mian_rightA");
	})
})()
