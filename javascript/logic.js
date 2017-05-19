$(document).ready(function() {
   
	//set starting time and separate into minutes and seconds for display
	var startTime = 2.5
	var startTimeMin = Math.floor(startTime);
	var startTimeSec = Math.floor(60*((startTime-startTimeMin) % 1));
	
	//output starting time
	$("#startingTime").text(startTimeMin+":"+startTimeSec);
	
	//start countdown when clicking start button
	$("#start").on("click",function(){
		startTimer();
	});

	//set time interval for clock updates (using seconds)
	function startTimer() {
		var timeInterval = window.setInterval(updateTimerOutput, 1000);
	}
	
	//update clock output every time interval passes
	function updateTimerOutput() {
		startTime = startTime-(1/60);
		startTimeMin = Math.floor(startTime);
		startTimeSec = Math.floor(60*((startTime-startTimeMin) % 1));
	
		$("#timeLeft").text(Math.floor(startTime)+":"+startTimeSec);

	}

});


		