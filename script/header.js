/*seach*/

$(".search_right>input").on({
	"focus": seachF,
	"blur": seachB
})

function seachF() {
	if($(this).val() == "美白面膜深沉洁面") {
		$(this).val("");
	}

}

function seachB() {
	if($(this).val() == "") {
		$(this).val("美白面膜深沉洁面");
	}
}
/*banner_nav_list*/
for(var i = 0; i < 200; i++) {

	var gound = Math.ceil(Math.random() * 500);
	$(".banner_nav_list li a:first-child").nextAll().eq(gound).css("color", "#E5004F");
}

$(".banner_nav_pinpai a").attr("href", "javascript:;")

$(".nav_main_li").mouseenter(function() {
	$(".banner_nav").css("display", "block")
})

$(".nav_main").mouseleave(function() {
	$(".banner_nav").css("display", "none")
})

var sto = localStorage.getItem("user");
console.log(sto)
sto = JSON.parse(sto);
if(sto.status == true) {
	$(".header li").eq(1).text(sto.username);
	$(".header li").eq(2).text("");
}