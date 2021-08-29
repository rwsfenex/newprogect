$(document).ready(function(){
	$('.slider').slick({
	arrows:true,
	adaptiveHeight:true,
	slidesToShow:2,
	autoplay:true,
	responsive:[	
	{ 
		breakpoint:691,
		settings:{
			slidesToShow:1
		}

	}
		]
	});
});