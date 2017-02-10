

+(function(){

	$(".main_right li").eq(0).css({
		"border-bottom":"3px solid #E62862",
			"color":"black"
	})
	 $(".main_right_dl").eq(0).css("display","block")
	
	
	$(".main_right li").click(function(){
		$(this).css({
			"border-bottom":"3px solid #E62862",
			"color":"black"
		}).siblings().css({
			"border-bottom":"",
			"color":"#999"
		})
		
		
		   $(".main_right_dl").eq($(this).index()).css("display","block").siblings(".main_right_dl").css("display","none");
	})	
	
	
})()






/*font*/


+(function(){
	
$(".tishi span").click(function(){
	$(".tishi").css("display","none")
})


var phoneyz=RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
var pwordyz=RegExp(/^\w{6,12}$/)	


		

$(".main_right_dl input:eq(2)").click(function(){
			
		var phone=$(".main_right_dl input").eq(0).val();
		var passwordo=$(".main_right_dl input").eq(1).val();
		
		
		
		if(!phoneyz.test(phone)||!pwordyz.test(passwordo)){
			$(".tishi").css("display","block");
			$(".tishi p").text("请输入正确的手机号或密码");
		}else{
			/*$.post("php/registerlog.php",{
					"phone":phone,
					"passwordo":passwordo
			},function(data){
				console.log(data);
				if(data==1){
					window.open("index.html","_self")
				}else{
					$(".tishi").css("display","block");
					$(".tishi p").text("请输入正确的手机号或密码");
				}
				
			});*/
			
			var datas=JSON.parse(localStorage.getItem("user"));
			if(datas.username==phone&&datas.passwords==passwordo){
				datas.status=true;
				datas=JSON.stringify(datas);
				localStorage.setItem("user",datas)
				location.href="index.html"
			}
			
			
		}
	
})



})()