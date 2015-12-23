$(document).ready(function() {
	var impressjs = impress();
	var car = [];
	var iphone = [];
	impressjs.init();
	
	$("#start").click(function() {
		impressjs.next();
		
		return false;
	});
	
	var hand = paper.image('img/hand-iphone.png', box[0] + 600, box[1] - 750, 600, 600);
	
	// create car
	for(i = 0; i < 4; i++) {
		car[i] = new Cars(i);
	}
	
	// create iphone
	for(i = 0; i < 5; i++) {
		iphone[i] = new iPhone(i);
	}
	
	// create swiping
	var swiping = paper.image('img/swipe.png', (box[1]/2) + 200, box[1] + 1000, 420, 900);
	
	document.addEventListener("impress:stepleave", function(e) {
		$(".step").css({opacity: 0.3});
		$("#"+e.target.id).css({opacity:0.4});
		if(e.target.id == "step-3") {
			for(i = 0; i < car.length; i++) {
				car[i].stop_moving();
			}
			setTimeout(function() {
				var animation = Raphael.animation({x: box[0] - 600},300);
				hand.animate(animation.delay(500));
			}, 800);
		}
		else if(e.target.id == "step-4") {
			var animation = Raphael.animation({x: box[0] + 600},300);
			hand.animate(animation.delay(500));
			
			setTimeout(function() {
				for(i = 0; i < iphone.length; i++) {
					iphone[i].moving();
				}
			});
		}
		else if(e.target.id == "step-5") {
			for(i = 0; i < iphone.length; i++) {
				iphone[i].moving_back();
			}
		}
		else if(e.target.id == "step-7") {
			setTimeout(function() {
				swiping.animate({'x': (box[1]/2) + 200}, 400);
			}, 450);
		}
	});
	
	document.addEventListener("impress:stepenter", function(e) {
		$("#"+e.target.id).css({opacity: 1});
		
		if(e.target.id != "step-1" && e.target.id != "step-8") {
			setTimeout(function() {
				impressjs.next();
			}, (e.target.id == "step-3") ? 4300 : 3200);
		}
		
		
		if(e.target.id == "step-3") {
			for(i = 0; i < car.length; i++) {
				car[i].moving();
			}
		}
		else if(e.target.id == "step-6") {
			swiping.animate({'y': 500}, 1200);
			setTimeout(function() {
				swiping.animate({'x': (box[1]/2) - 150}, 400);
			}, 3200);
		}
		else if(e.target.id == "step-8") {
			swiping.animate({'y': box[1] + 700}, 400);
			
			hand.animate({x: box[0] - 600}, 900);
		}
		
	});
	
});