$(document).ready(function() {

	/* check phone */
	var pf = navigator.platform;
	var ua = navigator.userAgent;
	if(/iphone/i.test(pf)){ //아이폰일때
		$("body").addClass("iphone");
	}

	/* for mobile gnb */
	$(".mAside li strong.dep1 a").click(function(){
		if ( $(this).parent().parent().hasClass("selected") )
		{
			$(this).parent().parent().removeClass("selected");
			$(this).parent().next().slideUp();
		}
		else
		{
			$(this).parent().parent().addClass("selected");
			$(this).parent().next().slideDown();
		}
		return false;
	});
	$(".mAside li .dep2.sub a").click(function(){
		if ( $(this).parent().parent().hasClass("selected") )
		{
			$(this).parent().parent().removeClass("selected");
			$(this).parent().next().slideUp();
		}
		else
		{
			$(this).parent().parent().addClass("selected");
			$(this).parent().next().slideDown();
		}
		return false;
	});
	$(".iAside").click(function(){
		$('html, body').animate({scrollTop : 0}, 0);
		$(".mAside .asideBg").css("min-height", $("#wrap").height()-58 );
		$(".mAside, .modalBgAside").show();
		$("#wrap, .modalBgAside").css("min-height", $(".mAside").height());
		$(".mAside").animate({'right':'0'});
		$(".modalBgAside").animate({'opacity':'0.5'});
		return false;
	});
	$(".modalBgAside, .mAside .close").click(function(){
		$(".modalBgAside").animate({'opacity':'0'});
		$(".mAside").animate({'right':'-100%'},function(){
			$(".modalBgAside").hide();
			$(".mAside .asideBg").css("min-height", "auto" );
			$(".mAside, .modalBgAside").hide();
			$("#wrap, .modalBgAside").css("min-height", "auto");
		});
	});

	$(window).on("resize", function(){
		if ( $(window).width() >= "768" )
		{
			$(".modalBgAside").animate({'opacity':'0'});
			$("#wrap").animate({'left':'0'},function(){
				$(".modalBgAside").hide();
				$("#wrap").height("auto");
				$(".mAside .asideBg").css("min-height", "auto" );
				$(".mAside, .modalBgAside").hide();
			});
		}
	});
	/* //for mobile gnb */
	$(".iTop").on("click", function(){
		$('html, body').animate({ scrollTop: 0 },500);
		return false;
	});

	$(".jsSliding").on("click", function(){
		$(".modalBgAside").animate({'opacity':'0'});
		$(".mAside").animate({'right':'-100%'},function(){
			$(".modalBgAside").hide();
			$(".mAside .asideBg").css("min-height", "auto" );
			$(".mAside, .modalBgAside").hide();
			$("#wrap, .modalBgAside").css("min-height", "auto");
		});
		$('html, body').animate({ scrollTop: $( $(this).attr("href") ).offset().top });
		return false;
	});


	/* select */
	selectricInit();
	
	$(window).scroll(function(){ 
		var winSc = $(document).scrollTop();
		var headerH = $("#header").height()
		if(winSc >= headerH)
			$("#wrap").addClass("fixedPortfolio");
		else
			$("#wrap").removeClass("fixedPortfolio");
	});
	
	$(".jsBtnQuestion").on("click",function(){
		$( $(this).attr("href") ).show();
		return false;	
	});
	$(".mLayer1 .iClose, .mLayer1 .bt").on("click",function(){
		$(this).parent().parent().hide();
		return false;
	});

});


// Selectric 가동
function selectricInit () {
	$('.footer-family select').selectric();
	as = $('.select-tric').selectric();
	as2 = $('.select-tric').data('selectric');
	$('.select-tric').on('selectric-change', function(e) {
		console.log(e);
	})
}