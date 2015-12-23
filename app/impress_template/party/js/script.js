function mobileHat() {
	/* for mobile menu */
	$('#mobile-hat .leftButton').click(function() {
		$('#mobile-hat ul.menu').toggleClass('showme');
		$('#mobile-hat .leftButton').toggleClass('pressed');
		$('#mobile-hat ul.menu').height($(document).height());
	});
	
	/* hide mobile menu after clicking something */
	$('#mobile-hat ul.menu li a').click(function(){
	  $('#mobile-hat ul.menu').removeClass('showme');
	  $('#mobile-hat .leftButton').removeClass('pressed');
  });

}

function resizeStuff() {
	
	/* classes that correspond to media queries */
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
	
	/* for top menu */
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
	/* adds different msg for touch devices */
	if ("ontouchstart" in document.documentElement) { 
    	document.querySelector(".hint").innerHTML = "<p>Tap on the left or right arrow to navigate</p>";
	}
	/* shows and sets behavior for left/right arrows on screen -- eventually decided to show these on touch
	/* and non-touch devices, although with slightly different visual treatments */
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

//function startup() {
	/* starts on #starter slide, moves to #home slide after page load and short delay*/
//	if ($('#impress #starter').hasClass('active')) {
//		impress().next();
//		setTimeout(function(){ $('#home').click().focus(); },1000);
//		return false;
//	}
	/* added this for webkit -- sometimes slides are mispositioned on page load, particularly when changing pages.
	/* this quickly moves slides forward 1 and back 1 on page load so quickly it's imperceptable, fixing the 
	/* misalignment if it exists */
//	impress().next();
//	impress().prev();
//}



$(document).ready(function() {
	/* adds class for 'not touch device' and removes #overview and #starter slides if a touch device */
	if (!("ontouchstart" in document.documentElement)) { 
		$('html').addClass('not-touch');
	} else {
		$('#impress #overview,#impress #starter').remove();
	}
	
	/* sets up click/touch arrows after short delay */
	setTimeout(touch, 200);
	
	/* run on pageload and rerun resize function when page is resized */
	var TO = false;
	$(window).resize(function(){
		if(TO !== false)
		clearTimeout(TO);
		TO = setTimeout(resizeStuff, 200);  
	}); 
	$(window).resize();
	
	/* setup mobile menu */
	mobileHat(); 
	
	 $('body').bind('orientationchange',function(event){
        changeOrientation(window.orientation);
    });

    function changeOrientation(ori){
       window.location.reload();
    }     

	
	/* kickstart impress */
	impress().init();
	
	/* show slides now that impress is running */
	$('#impress').css("opacity","1");
	
	/* start custom startup function from above */
	setTimeout(startup,1000);
		
});