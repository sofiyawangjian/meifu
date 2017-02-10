


	/*更换图片*/
function cgImg(tag,arrName){
			for (var i = 0; i < tag.length; i++) {
				/*$(tag).eq(i).css("background-image",arrName[i]);*/
				$(tag).eq(i).append("<img />").find("img:last-child").attr("src",arrName[i]);
			}}

	/*main_one*/
		var moneImg=["images/mainone1.jpg","images/mainone2.jpg","images/mainone3.jpg","images/mainone4.jpg"]
		var moneImg1=["images/mainone5.jpg","images/mainone3.jpg","images/mainone5.jpg","images/mainone2.jpg"]
		var moneImg2=["images/mainone6.jpg","images/mainone1.jpg","images/mainone4.jpg","images/mainone3.jpg"]
			cgImg(".main_one_img:eq(0) a",moneImg);
			cgImg(".main_one_img:eq(1) a",moneImg1);
			cgImg(".main_one_img:eq(2) a",moneImg2);
			
		
	/*main_two*/
		var arrTwo=["images/maintwo2.jpg","images/maintwo3.jpg","images/maintwo4.jpg"];
		var arrTwo1=["images/maintwo5.jpg","images/maintwo4.jpg","images/maintwo3.jpg"];
		cgImg(".main_two_pinpai_top:eq(0) a",arrTwo);
		cgImg(".flex a",arrTwo1);
	/*main_three*/
		var threeAImg=["images/mainthree3.jpg","images/mainthree4.jpg","images/mainthree5.jpg","images/mainthree6.jpg"]
		
		var threeImg=["images/three1.jpg","images/three2.jpg","images/three3.jpg","images/three4.jpg","images/three5.jpg",
						"images/three6.jpg","images/three1.jpg","images/three2.jpg","images/three9.jpg",
						"images/three10.jpg","images/three11.jpg","images/three12.jpg",
						"images/three7.jpg","images/three8.jpg","images/three9.jpg","images/three10.jpg"]
		cgImg("#main_three .main_three_left_down a",threeImg);
		cgImg("#main_three .main_three_right a",threeAImg);
	/*main_four*/
		var fourAImg=["images/four1.jpg","images/four2.jpg","images/four3.jpg","images/four4.jpg"];
			cgImg("#main_four .main_three_left_down a",threeImg);
			cgImg("#main_four .main_three_right a",fourAImg);
			
	///*****////		
			cgImg("#main_five .main_three_left_down a",threeImg);
			cgImg("#main_six .main_three_left_down a",threeImg);
			cgImg("#main_seven .main_three_left_down a",threeImg);
			cgImg("#main_eight .main_three_left_down a",threeImg);
			cgImg("#main_nine .main_three_left_down a",threeImg);
			cgImg("#main_ten .main_three_left_down a",threeImg);
			cgImg("#main_eleven .main_three_left_down a",threeImg);
			
	//*****////
		/*main_five*/
		var fiveAImg=["images/five1.jpg","images/five2.jpg","images/five3.jpg","images/five4.jpg"];
			cgImg("#main_five .main_three_right a",fiveAImg);
		var sixAImg=["images/six1.jpg","images/six2.jpg","images/six3.jpg","images/six4.jpg"];
			cgImg("#main_six .main_three_right a",sixAImg);
		var senvenAImg=["images/seven1.jpg","images/seven2.jpg","images/seven3.jpg","images/seven4.jpg"];
			cgImg("#main_seven .main_three_right a",senvenAImg);
		var eightAImg=["images/eight1.jpg","images/eight2.jpg","images/eight3.jpg","images/eight4.jpg"];
			cgImg("#main_eight .main_three_right a",eightAImg);
		var nineAImg=["images/nine1.jpg","images/nine2.jpg","images/nine3.jpg","images/nine4.jpg"];
			cgImg("#main_nine .main_three_right a",nineAImg);	
		var tenAImg=["images/ten1.jpg","images/ten2.jpg","images/ten3.jpg","images/ten4.jpg"];
			cgImg("#main_ten .main_three_right a",tenAImg);
		var elevenAImg=["images/eleven1.jpg","images/eleven2.jpg","images/eleven3.jpg","images/eleven4.jpg"];
			cgImg("#main_eleven .main_three_right a",elevenAImg);
			
			
		var font_topImg=["images/font_top1.jpg","images/font_top2.jpg","images/font_top3.jpg",]
			cgImg(".fonter_top a",font_topImg);		
	
	
/////////**********边框动画////////

		function bdAnimate(tagName){
			$(tagName).mouseenter(borderAM).append("<div class='border_top'></div><div class='border_left'></div><div class='border_right'></div><div class='border_bottom'></div>")
		$(tagName).mouseleave(borderAMre)
			function borderAM(){
				$(this).find(".border_top,.border_bottom").width("100%")
				$(this).find(".border_left,.border_right").height("100%")
			}
			function borderAMre(){
				$(this).find(".border_top,.border_bottom").width("0%")
				$(this).find(".border_left,.border_right").height("0%")
			}
		}
		/*main_one*/
		bdAnimate(".main_one_img:eq(0) a");
		bdAnimate(".main_one_img:eq(1) a");
		/*main_two*/
		bdAnimate(".main_two_tuijian>div")
		/*main_two*/
		bdAnimate(".main_three_right a");
		
/////////**********边框动画////////	


//////////////////////////**内容区******************//////
		/*左右按钮*/
			function threeMBtnR(tagName){
			if(!$(tagName).is(":animated")){
				$(tagName).animate({"left":"-390px"})
				
			}
			
		}
		function threeMBtnL(tagName){
			if(!$(tagName).is(":animated")){
				$(tagName).animate({"left":"0px"})
				$(".main_three_middle_btn span:eq(0)").css("background","#D10249").siblings().css("background","#666");
			}	
		}
		
		
		
			
		$("#main_three .main_three_middle span:eq(0)").click(function(){
			threeMBtnR("#main_three .main_three_middle>div:eq(0)")
		})
		$("#main_three .main_three_middle span:eq(1)").click(function(){
			threeMBtnL("#main_three .main_three_middle>div:eq(0)")
		})
		/*six*/
		$("#main_six .main_three_middle span:eq(0)").click(function(){
			threeMBtnR("#main_six .main_three_middle>div:eq(0)")
		})
		$("#main_six .main_three_middle span:eq(1)").click(function(){
			threeMBtnL("#main_six .main_three_middle>div:eq(0)")
		})
		/*seven*/
		$("#main_seven .main_three_middle span:eq(0)").click(function(){
			threeMBtnR("#main_seven .main_three_middle>div:eq(0)")
		})
		$("#main_seven .main_three_middle span:eq(1)").click(function(){
			threeMBtnL("#main_seven .main_three_middle>div:eq(0)")
		})
		/*nine*/
		$("#main_nine .main_three_middle span:eq(0)").click(function(){
			threeMBtnR("#main_nine .main_three_middle>div:eq(0)")
		})
		$("#main_nine .main_three_middle span:eq(1)").click(function(){
			threeMBtnL("#main_nine .main_three_middle>div:eq(0)")
		})
	/*左右按钮*/
	
	
	
	
	/*****中间部分的小按钮***///
	
	



/**********************左边的小角角***************/
	

	function moveL(tagName){
		/*	num++;*/
			
				if($(tagName).css("left")=="-510px"){
					$(tagName).css("left","0px")
				}
				if(!$(tagName).is(":animated")){
									$(tagName).animate({
									"left":"-=170px"
								},300,function(){	
								})}}
	
	function moveR(tagName){
				if($(tagName).css("left")=="0px"){
					$(tagName).css("left","-510px")
				}
					if(!$(tagName).is(":animated")){
									$(tagName).animate({
									"left":"+=170px"
								},300,function(){	
								})}}
	
				
	$("#main_three .main_three_left_down span").eq(0).click(function(){
		moveL("#main_three .main_three_left_down>div div")
	})
	$("#main_three .main_three_left_down span").eq(1).click(function(){
		moveR("#main_three .main_three_left_down>div div")
	})		
	/*main_four*/
	$("#main_four .main_three_left_down span").eq(0).click(function(){
		moveL("#main_four .main_three_left_down>div div")
	})
	$("#main_four .main_three_left_down span").eq(1).click(function(){
		moveR("#main_four .main_three_left_down>div div")
	})		
	/*main_five*/
	$("#main_five .main_three_left_down span").eq(0).click(function(){
		moveL("#main_five .main_three_left_down>div div")
	})
	$("#main_five .main_three_left_down span").eq(1).click(function(){
		moveR("#main_five .main_three_left_down>div div")
	})	
	/*main_six*/
	$("#main_six .main_three_left_down span").eq(0).click(function(){
		moveL("#main_six .main_three_left_down>div div")
	})
	$("#main_six .main_three_left_down span").eq(1).click(function(){
		moveR("#main_six .main_three_left_down>div div")
	})
	/*main_sven*/
	$("#main_seven .main_three_left_down span").eq(0).click(function(){
		moveL("#main_six .main_three_left_down>div div")
	})
	$("#main_seven .main_three_left_down span").eq(1).click(function(){
		moveR("#main_seven .main_three_left_down>div div")
	})
	/*main_eight*/
	$("#main_eight .main_three_left_down span").eq(0).click(function(){
		moveL("#main_eight .main_three_left_down>div div")
	})
	$("#main_eight .main_three_left_down span").eq(1).click(function(){
		moveR("#main_eight .main_three_left_down>div div")
	})
	/*main_nine*/
	$("#main_nine .main_three_left_down span").eq(0).click(function(){
		moveL("#main_nine .main_three_left_down>div div")
	})
	$("#main_nine .main_three_left_down span").eq(1).click(function(){
		moveR("#main_nine .main_three_left_down>div div")
	})
	/*main_ten*/
	$("#main_ten .main_three_left_down span").eq(0).click(function(){
		moveL("#main_ten .main_three_left_down>div div")
	})
	$("#main_ten .main_three_left_down span").eq(1).click(function(){
		moveR("#main_ten .main_three_left_down>div div")
	})
	/*main_eleven*/
	$("#main_eleven .main_three_left_down span").eq(0).click(function(){
		moveL("#main_eleven .main_three_left_down>div div")
	})
	$("#main_eleven .main_three_left_down span").eq(1).click(function(){
		moveR("#main_eleven .main_three_left_down>div div")
	})
/**********************************左小的小角角*****************************/



/**********************************内容区结束*****************************/






/*fix*/
		var tops=0;
		var allBox=$("#main_two_fg").nextUntil(".fonter_top");
		var allLi=$("#fix li")	
	$(document).scroll(function(){
		tops=$(document).scrollTop();
		if(tops>=$("#main_one").offset().top){
			$("#fix").css("display","block")
		}else{
			$("#fix").css("display","none")
		}
		
		
		
		
		allBox.each(function(i,o){
			if(tops>=allBox.eq(i).offset().top){
				allLi.css("background","#ECECEC").find("a").css("color","black");
				allLi.eq(i).css("background","#E5004F").find("a").css("color","white");
			}	
		})		
	})
	
	
	



	
		allLi.on("click",fix)
			function fix(){
				if($(this).index()==allBox.length){
					$("body,html").animate({
					scrollTop:0
				})	
					
				}
				
				if(!$("body,html").is(":animated")){
					$("body,html").animate({
					scrollTop:allBox.eq($(this).index()).offset().top
				})	
				}
				
			}











/*banner*/
+(function(){
	

		var banner_wrap=setInterval(banner,2000);
		$(".banner_middle li").eq(0).css("background","#E50048");
		var numBanner=0;
		var bannerBgimg=["url(images/1_.jpg)","url(images/2_.jpg)","url(images/3_.jpg)","url(images/4_.jpg)","url(images/5_.jpg)"]
		var bannerImg=["url(images/1.jpg)","url(images/2.jpg)","url(images/3.jpg)","url(images/4.jpg)","url(images/5.jpg)"]
		function banner(){
			$("#banner_wrap").css("background-image",bannerBgimg[numBanner]);
			$("#banner").css("background-image",bannerImg[numBanner]);
			$(".banner_middle li").eq(numBanner).css("background","#E5004F").siblings().css("background","#323333")
			numBanner++;
			if(numBanner==bannerImg.length){
				numBanner=0;
			}
		}

		$(".banner_middle").hover(function(){
			$(this).find("span").fadeIn(500)
			clearInterval(banner_wrap);
		},function(){
			banner_wrap=setInterval(banner,2000);
			$(this).find("span").fadeOut(500)
		})
		
		
		$(".banner_middle li").mouseenter(bannerBtn);
			function bannerBtn(){
				$("#banner_wrap").css("background-image",bannerBgimg[$(this).index()]);
				$("#banner").css("background-image",bannerImg[$(this).index()]);
				$(".banner_middle li").eq($(this).index()).css("background","#E5004F").siblings().css("background","#323333")
				numBanner=$(this).index();
			}
		
		$(".banner_middle span").eq(1).click(bannerBtn_l)
			function bannerBtn_l(){
				numBanner--;
				if(numBanner<0){
					numBanner=bannerBgimg.length-1;
				}
				$("#banner_wrap").css("background-image",bannerBgimg[numBanner]);
				$("#banner").css("background-image",bannerImg[numBanner]);
				$(".banner_middle li").eq(numBanner).css("background","#E5004F").siblings().css("background","#323333")
			}
			
			$(".banner_middle span").eq(0).click(bannerBtn_R)
			function bannerBtn_R(){
				numBanner++;
				if(numBanner>bannerBgimg.length-1){
					numBanner=0;
				}
				$("#banner_wrap").css("background-image",bannerBgimg[numBanner]);
				$("#banner").css("background-image",bannerImg[numBanner]);
				$(".banner_middle li").eq(numBanner).css("background","#E5004F").siblings().css("background","#323333")
			}

})()

/*main_one*/
		
		
			
			
			
			
		$("#main_one li").mouseenter(mainTitleShow)
			function mainTitleShow(){
				$("#main_one li").css({"border-bottom":"5px solid #333333"}).eq($(this).index()).css({"border-bottom":"5px solid #E50048"})
				$("#main_one li span").css({"display":"none"}).eq($(this).index()).css({"display":"block"})
			}
			
			$("#main_one li").eq(0).css({"border-bottom":"5px solid #E50048"})
			$("#main_one li").eq(0).find("span").css({"display":"block"})
			
/*.main_one_img*/

			$("#main_one>ul li").mouseenter(mainOneShow)
				function mainOneShow(){
					$(".main_one_img").css("display","none").eq($(this).index()).css("display","block");
				}
				
			
			
/*main_two*/

	$(".main_two_main_right_top>span").eq(0).css({"border-bottom":"3px solid #e70050","font-weight":"bold"});
	$(".main_two_main_right_top>span span").eq(0).css("display","block");
	$(".main_two_main_right_top>span").mouseenter(mainTwoShow)
				function mainTwoShow(){
					$(".main_two_main_right_top>span").css({
						"border-bottom":"3px solid #333",
						"font-weight":"0"
						}).eq($(this).index()).css({
							"border-bottom":"3px solid #e70050",
							"font-weight":"bold"
						});
					$(".main_two_main_right_top>span span").css("display","none").eq($(this).index()).css("display","block");
				}
	
		


		$(".main_two_tuijian>div:gt(3)").css("margin-top","5px")
		
		$(".main_two_main_right_top>span").eq(0).mouseenter(function(){
			$(".main_two_tuijian").css("display","none");
			$(".main_two_pinpai").css("display","block");
		})
		$(".main_two_main_right_top>span").eq(1).mouseenter(function(){
			$(".main_two_tuijian").css("display","block");
			$(".main_two_pinpai").css("display","none");
		})









/*mainthree*/




$(".header").load("header.html",function(){
					$.getScript("script/header.js");
})
		
	

	
		
		
		
		

	
		




