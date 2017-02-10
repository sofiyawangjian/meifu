
	
	
	
	
	
	function cgImg(tagName,arr){
		$(tagName).each(function(i,o){
			$(this).append("<img src="+arr[i]+">")
		
		})}
	
	
	var mainLogo=["images/productlist/logo1.jpg","images/productlist/logo2.jpg","images/productlist/logo3.jpg",
				"images/productlist/logo4.jpg","images/productlist/logo5.jpg","images/productlist/logo6.jpg",
				"images/productlist/logo7.jpg","images/productlist/logo8.jpg","images/productlist/logo9.jpg",
				"images/productlist/logo10.jpg","images/productlist/logo11.jpg","images/productlist/logo5.jpg",
				"images/productlist/logo8.jpg","images/productlist/logo7.jpg","images/productlist/logo3.jpg","images/productlist/logo9.jpg","images/productlist/logo3.jpg","images/productlist/logo9.jpg"]
		cgImg("#main_log ul a",mainLogo)

		
	

