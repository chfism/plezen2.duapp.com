// JavaScript Document
$('.error').hide(); 

$(function() {  
  $(".nameButton").click(function() {  
    // validate and process form here
	  
	$('.error').hide();  
   var name = $("input#userName").val();  
        if (name == "") {  
      $("label#name_error").show();  
      $("input#userName").focus();  
      return false;  
    } 
	else {
		impress().next();
		}
    
  var dataString = 'name='+ name;  
  
//alert (dataString);return false;  
$.ajax({  
  type: "POST",  
  url: "main_controller.php",  
  data: dataString,  
  success: function() {  
    $('#nameReplace').html("<div id='message'></div>");
	$('#nameReplace2').html("<p>" + name + "</p>");  
    $('#message').html("<p>" + name + "</p>")  
    .hide()  
    .fadeIn(1500, function() {  
      $('#message').append("<h2>It's going to be a fun ride!</h2>");
	    
    });  
  }  
});  
return false; 

  });

});


$(function() {  
  $(".urlButton").click(function() {  
    // validate and process form here
	  
	$('.error').hide();  
   var website = $("input#clientWebsite").val();  
        if (website == "") {  
      $("label#url_error").show();  
      $("input#clientWebsite").focus();
	  impress().next();  
      return false;  
    } 
	
    
  var dataString = 'url='+ website;  
  
//alert (dataString);return false;  
$.ajax({  
  type: "POST",  
  url: "main_controller.php",  
  data: dataString,  
  success: function() {  
    $('#websiteForm').html("<div id='message2'></div>");  
    $('#message2').html("<h2>We will most assuredly check out</h2>")  
    .hide()  
    .fadeIn(750, function() {  
	  $('#message2').append("</br>");
      $('#message2').append(website);
	  $('#message2').append("</br>");
	  $('#message2').append("</br>");
	  
	    
    });  
  }  
});  
return false; 

  });

});


$(function() {  
  $(".ideasButton").click(function() {  
    // validate and process form here
	  
	$('.error').hide();  
   var ideas = $("textarea#ideasBox").val();  
        if (ideas == "") {  
      $("label#ideas_error").show();  
      $("textarea#ideasBox").focus();
	   
      return false;  
    } 
	
    
  var dataString = 'ideas='+ ideas;  
  
//alert (dataString);return false;  
$.ajax({  
  type: "POST",  
  url: "main_controller.php",  
  data: dataString,  
  success: function() {  
    $('#ideasReplace').html("<div id='message3'></div>");  
    $('#message3').html("<h1>Here are your awesome ideas</h1>")  
    .hide()  
    .fadeIn(750, function() {  
	  $('#message3').append("</br>");
      $('#message3').append(ideas);
	  $('#message3').append("</br>");
	  $('#message3').append("</br>");
	  $('#message3').append("<p>We will certainly give them a hearty processing.</p>");
	  $('#message3').append("</br>");
	  $('#moveOn').addClass("showLink");
	  
	    
    });  
  }  
});  
return false; 

  });

});

$(function() {  
  $(".worldButton").click(function() {  
    // validate and process form here
	  
	$('.error').hide();  
   var world = $("textarea#worldBox").val();  
        if (world == "") {  
      $("label#world_error").show();  
      $("textarea#worldBox").focus();
	   
      return false;  
    } 
	
    
  var dataString = 'world='+ world;  
  
//alert (dataString);return false;  
$.ajax({  
  type: "POST",  
  url: "main_controller.php",  
  data: dataString,  
  success: function() {  
    $('#worldReplace').html("<div id='message4'></div>");  
    $('#message4').html("<h1>Here how we're connecting</h1>")  
    .hide()  
    .fadeIn(750, function() {  
	  $('#message4').append("</br>");
      $('#message4').append(world);
	  $('#message4').append("</br>");
	  $('#message4').append("</br>");
	  $('#message4').append("<p>We are cooking with gas now Baby!</p>");
	  $('#message4').append("</br>");
	  $('#moveOn2').addClass("showLink");
	  
	    
    });  
  }  
});  
return false; 

  });

});

$(function() {  
  $(".onlinehrsButton").click(function() {  
    // validate and process form here
	  
	$('.error').hide();  
   var onlinehrs = $("input#onlineHrs").val();  
        if (onlinehrs == "") {  
      $("label#onlinehrs_error").show();  
      $("input#onlineHrs").focus();
	   
      return false;  
    } 
	
    
  var dataString = 'onlinehrs='+ onlinehrs;  
  
//alert (dataString);return false;  
$.ajax({  
  type: "POST",  
  url: "main_controller.php",  
  data: dataString,  
  success: function() {  
    $('#onlinehrsReplace').html("<div id='message5'></div>");  
    $('#message5').html("<h2>Well that's brilliant, it seems your computer knowledge is</h2>")  
    .hide()  
    .fadeIn(750, function() { 
	
	if (onlinehrs < 5){
		$('#message5').append("</br>");
		$('#message5').append("<p>Not really all that much is it?</p>");
		$('#message5').append("</br>");
		$('#message5').append("<p>Well, we'll just have to give you extra care and help you right along.  Just means a little more work on our end.</p>");
		}
	else if (5 <= onlinehrs) {
		$('#message5').append("</br>");
		$('#message5').append("<p>Pretty decent I guess.</p>");
		$('#message5').append("</br>");
		$('#message5').append("<p>Awesome, you're going to be a breeze of a client.  We'll get things going in no time.</p>");
		} 
	
	
	  
	  $('#moveOn3').addClass("showLink");
	  
	    
    });  
  }  
});  
return false; 

  });

});






$(function() {  
  	$(".moneyButton").click(function() {  
    // validate and process form here
	  
	$('.error').hide();  
   	var money = $("input#money").val();  
        if (money == "") {  
      $("label#money_error").show();  
      $("input#money").focus();
      return false;  
    } 
	var dataString = 'money='+ money; 
	var ms = (money * 72000);
	
	
//Example
function convertMS(ms) {
  var w, d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  w = Math.floor(d / 7);
  d = d % 7;
  return { w: w, d: d, h: h, m: m, s: s };
};


 
var timemoney = convertMS(ms);

  
//alert (dataString);return false;  
$.ajax({  
  type: "POST",  
  url: "main_controller.php",  
  data: dataString,  
  success: function() {  
    $('#moneyReplace').html("<div id='message6'></div>"); 
	 
    $('#message6').html("<h2>" + "This is the amount of  work time we can give you for " + "&#36;" + money + "</h2>")
	$('#message6').append("</br>")
	$('#message6').append("<h1>" + timemoney.w + " " + "weeks" + " " + timemoney.d + " " + "days" + " " + timemoney.h + " " + "hours" + "&ast;" + "</h1>")
	$('#message6').append("<h4>&ast;This is pure time, not considering sleeping, resting, or regular refuse relief.</h4>")  
    .hide()  
    .fadeIn(750, function() { 
	
	var entered = "You entered a number between"; 
	
	if (money >= 1 && money < 21) {
		$('#message6').append("</br>");
		$('#message6').append("<p>Well...</p>");
		$('#message6').append("<p>For under &#36;20 we can't get a whole lot done.</p>");
		$('#message6').append("<p>You would be able to register your domain and get things started at least.</p>");
		
		$('#headBack').addClass("showLink");
		impress().next();
		}
else if (money >= 21 && money < 201)
  {$('#message6').append("</br>");
		$('#message6').append("<p>It's a start for sure.</p>");
		$('#message6').append("<p>&#36;200 will easily get you a basic CMS site, hosting, and a domain.</p>");
		$('#message6').append("<p>You'll have to do most of the work though.</p>");
		$('#headBack').addClass("showLink");
		impress().next();}
else if (money >= 201 && money < 501)
  {$('#message6').append("</br>");
		$('#message6').append("<p>Now we're talking!</p>");
		$('#message6').append("<p>&#36;500 will get you a sweet CMS site, hosting, domain and custom template design.</p>");
		$('#message6').append("<p>I see a beautiful site in your future.</p>");
		$('#headBack').addClass("showLink");
		impress().next();}
else if (money >= 501 && money < 2001)
  {$('#message6').append("</br>");
		$('#message6').append("<p>Get 'er Done Cash!</p>");
		$('#message6').append("<p>For &#36;500 to &#36;2,000 we can build you a gorgeous CMS based website. We'll be able to integrate all sorts of cool features.</p>");
		$('#message6').append("<p>We can't wait to get started.</p>");
		$('#headBack').removeClass("showLink");
		$('#moveOn4').addClass("showLink");
		impress().next();}
else if (money >= 2001)
  {$('#message6').append("</br>");
		$('#message6').append("<p>Fully Custom</p>");
		$('#message6').append("<p>For anything over &#36;2,000 we can build all sorts of cool custom features, with sexy design.</p>");
		$('#message6').append("<p>Let's make those idears into virtual realities.</p>");
		$('#message6').append("<p>The Sky is the Limit! Let's make it happen.</p>");
		$('#headBack').removeClass("showLink");
		$('#moveOn4').addClass("showLink");
		impress().next();}
else
  {alert("Sorry sweety, can't add commas or money signs. Just cold hard numbers.")}
		  
	  
	     
    			});  
  			}  
		});  
return false; 

  	});

});

$(function() {  
  $("button.karlek").click(function() {
	  
	$('#goldenLoad').load('./karlek.html'); 
	});
});