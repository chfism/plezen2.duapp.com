function mobileHat() {
	$('#mobile-hat .leftButton').click(function() {
		$('#mobile-hat ul.menu').toggleClass('showme');
		$('#mobile-hat .leftButton').toggleClass('pressed');
		$('#mobile-hat ul.menu').height($(document).height());
	});

}

function resizeStuff() {
		
	if (window.innerWidth < 740) {
		$('html').removeClass('small medium large');
		$('html').addClass('small');
	} 
	
	if (Modernizr.mq('all and (min-width: 740px) and (min-device-width: 740px), (max-device-width: 800px) and (min-width: 740px) and (orientation:landscape)')) {
		$('html').removeClass('small medium large');
		$('html').addClass('medium');
	}
	
	if (Modernizr.mq('all and (min-width: 980px) and (min-device-width: 980px)')) {
		$('html').removeClass('small medium large');
		$('html').addClass('large');
	}
	
	if ( $('html').hasClass('lte8') ) {
		$('html').removeClass('small medium large');
		$('html').addClass('large');	
	}
	
	var menuheight = $('#menu').height();
	$('#menu').removeClass('open').css('top','-'+menuheight+'px');
	
	$('#menuicon a').off().click(function(){
		$('#menu').stop(false,true).toggleClass('open');
		if ($('#menu').hasClass('open')) {
			$('#menu').animate({
    			top: '0px'
  				}, 500);
		} else {
			$('#menu').animate({
    			top: '-'+menuheight+'px'
  				}, 500);
		}
		return false;
	});

}

function touch() {
	if ("ontouchstart" in document.documentElement) { 
    	document.querySelector(".hint").innerHTML = "<p>Tap on the left or right arrow to navigate</p>";
	}
	$('.impress-enabled #next,.impress-enabled #prev').show();
	
	$('#next').click(function(){
		impress().next();
		return false;
	});

	$('#prev').click(function(){
		impress().prev();
		return false;
	});
}

function startup() {
	if ($('#impress #starter').hasClass('active')) {
		impress().next();	
		setTimeout(function(){ $('#home').click().focus(); },1000);
		return false;
	}
}



$(document).ready(function() {
	
	if (!("ontouchstart" in document.documentElement)) { 
		$('html').addClass('not-touch');
	} else {
		$('#impress #overview,#impress #starter').remove();
	}
	setTimeout(touch, 200);
	
	var TO = false;
	$(window).resize(function(){
		if(TO !== false)
		clearTimeout(TO);
		TO = setTimeout(resizeStuff, 200);  
	}); 
	$(window).resize();
	
	mobileHat(); 
	
	impress().init();
	
	$('#impress').css("opacity","1");
	
	setTimeout(startup,1000);
		
});