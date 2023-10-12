
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:false,
    autoplayTimeout:2000,
    stagePadding:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});

