/*
	Presentation of Swiping Counter
	Made it possible with Raphael JS and Impress JS.
	
	The file contains: 
	- Numbers Class: It create a number, counting and moving randomly.
	- Cars Class: It create a car, moving from right to left with random speed
	- iPhone Class: It create an iPhone with scaling & position randomly
	
	Created: Wed, June 5 2013
	Author: Didats Triadi
	Link: http://didats.net
	
*/

// start by creating a box of Raphael.
var box = [document.documentElement.clientWidth, 
			document.documentElement.clientHeight];

// start the canvas
var paper = Raphael("numbers", box[0], box[1]);

// ---------- Numbers

function Numbers(startingNumber, movingSpeed, objIndex) {
	// get the random with starting on the top or the bottom
	this.first_pos = (this.get_random(0, 2) == 1) ? "top" : "bottom";
	
	// position
	this.x = this.get_random(0, box[0] - 40);
	this.y = (this.first_pos == "top") ? -80 : box[1] + 80;
	
	// font size
	this.fontSize = this.get_random(30, 130);
	
	// has the setTimeout variable
	this.interval = null;
	
	// starting number
	this.textNumber = startingNumber;
	this.startingNumber = startingNumber;
	
	// the index of object
	this.index = objIndex;
	
	// speed of moving
	this.speed = movingSpeed;
	
	// create the object, and set the attribute
	this.obj = paper.text(this.x, this.y, startingNumber);
	this.obj.attr({"font-size":this.fontSize, fill: "#b6dad9", "font-family":"Raleway, Helvetica Neue, Helvetica, Arial"});
	
	// an array of counting speed
	this.count = [10, 20, 100, 200, 120, 30, 5, 55, 90, 140, 210, 15, 95];
}

// random method
Numbers.prototype.get_random = function(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// start counting
Numbers.prototype.start_counting = function() {
	// get 'this' to another reference
	var current = this;
	var obj = this.obj;
	this.textNumber = this.textNumber + 1;
	var number = current.textNumber;
	
	// this is the thing that making a number counting by itself
	this.interval = setTimeout(function() {
		// stop when reach 1150 + starting number
		if(number < current.startingNumber + 1150) {
			obj.attr({"text": number});
			current.start_counting();	 // keep counting, keep that
		}
		else {
			this.textNumber = this.get_random(0, 40);
			obj.attr({"text": number});
			current.start_counting();
		}
	}, this.count[this.index]);
}

// start moving
Numbers.prototype.moving = function() {
	// if the position coming from top, move it to bottom, etc
	var destinationY = (this.first_pos == "top") ? box[1] + 100 : -140;
	
	// save the 'this' keyword
	var current = this;
	var animation = Raphael.animation({y: destinationY},this.speed, function() {
		// yes, moving continously without stopping.
		current.first_pos = (current.first_pos == "top") ? "bottom" : "top";
		current.textNumber = current.get_random(10, 40);
		current.startingNumber = current.textNumber;
		current.fontSize = current.get_random(30, 130);
		current.x = current.get_random(30, box[0] - 20);
		current.obj.attr({'x': current.x, 'font-size': current.fontSize});
		current.moving();
	});
	this.obj.animate(animation.delay(100 + this.get_random(200, 1000)));
}

// --------- Cars
function Cars(carIndex) {
	// position
	this.x = box[0] + 200;
	this.y = box[1]/2 + 150;
	
	// index
	this.index = carIndex;
	
	// image object
	this.imageSrc = 'img/car' + (this.index + 1) + '.png';
	this.objImage = paper.image(this.imageSrc, this.x, this.y, 165, 60);
	
	// a flat to stop
	this.stop = 0;
	
	// speed array
	speed = [1280, 2490, 1250, 800, 920];
	this.speed = speed[this.index] + 1300;
} 

Cars.prototype.moving = function() {
	var current = this;
	
	// move the cars until the flag turn to 1
	var animation = Raphael.animation({x: -200}, this.speed, function() {
		if(current.stop == 0) {
			current.x = box[0] + 200;
			current.speed = get_random(700, 2000) + 1500;
			current.objImage.attr({'x': current.x});
			current.moving();
		}
	});
	
	this.objImage.animate(animation.delay(100 + get_random(200, 1000)));
};

// this is the method which make the car stopped
Cars.prototype.stop_moving = function() {
	this.stop = 1;	
};

// ------------ iPhone
function iPhone(phoneIndex) {
	// position
	position = [
				[140, 170], [box[0] - 300, 100], [box[0] - 600, box[1] - 300],  [800, 30], [box[0] - 250, 400], [700, box[1] - 300],   
				];
	this.x = position[phoneIndex][0];
	this.y = position[phoneIndex][1];
	
	// scaling
	scaling = [1, 0.23, 0.5, 0.3, 0.8, 0.6, 0.15];
	this.scaling = scaling[phoneIndex];
	
	// the iphone object
	this.obj = paper.image('img/iphone.png', this.x, -650, 265 * this.scaling, 545*this.scaling);
	this.obj.attr({'opacity': (phoneIndex == 0) ? 1 : 0.7});
	this.speed = 300;
}

iPhone.prototype.moving = function() {
	var current = this;
	
	var animation = Raphael.animation({x: this.x, y: this.y}, this.speed, function() {
		
	});
	this.obj.animate(animation.delay(get_random(300, 2000)));
};

iPhone.prototype.moving_back = function() {
	this.obj.animate({y: -800}, 300);
};

function get_random(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

speed = [200, 1400, 1000, 1310, 1800, 908, 200, 140, 459, 2000, 1500, 1280, 913, 3140, 810];

obj = [];

for(i = 0; i < 15; i++) {
	obj[i] = new Numbers(get_random(10, 40), speed[i] + 350, i);
	obj[i].start_counting();
	obj[i].moving();
}
