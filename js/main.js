
/Бургер меню/ 
$(function(){
	$('.header__burger-triger').click(function(){
		$('.top-nav').toggleClass('menu-opened');
		$('.contact-us').toggleClass('menu-opened');
		$('.header__burger-menu').toggleClass('header__burger-menu--open');
	});
});

 $(document).ready(function(){

 	$('.slider').slick({
 		dots: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1,
	  	arrows: false,
	  	autoplay: true

 	});
});
