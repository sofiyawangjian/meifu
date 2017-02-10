/*$(".register button").click(function(){
	$(".tishi").css("display","block")
})*/


$(".tishi span").click(function(){
	$(".tishi").css("display","none")
})


var phoneyz=RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
	


		

$(".register button").click(function(){
	
		var phone=$(".register input").eq(0).val();
		var yzm=$(".register input").eq(1).val();
		var opassword=$(".register input").eq(2).val();
		var opassword2=$(".register input").eq(3).val();
		
		
		
		if(!phoneyz.test(phone)){
			$(".tishi").css("display","block");
			$(".tishi p").text("请输入正确的手机号");
		}
	
})


