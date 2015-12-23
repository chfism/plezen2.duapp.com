//Hook up the tweet display

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "31 jan 2015 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

    $(".tweet").tweet({
        username: "flashuser",
        count: 3,
        loading_text: "loading tweets..."
    });

});	
