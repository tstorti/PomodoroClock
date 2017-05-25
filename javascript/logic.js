$(document).ready(function() {
   
	//set starting time and separate into minutes and seconds for display
	var status=0;
	var startTime1 = 25;
	var startTime2 = 5;
	var timeInterval1=null;
	var timeInterval2=null;

	//output default starting time

	$("#timeLeft1").attr("data-time", startTime1);
	$("#timeLeft1").text(formatTime(startTime1));
	$("#timeLeft2").attr("data-time", startTime2);
	$("#timeLeft2").text(formatTime(startTime2));


	//set timer with user input
	$("#set1").on("click",function(){
		startTime1 = $("#inputTime1").val();
		$("#timeLeft1").attr("data-time", startTime1);
		$("#timeLeft1").text(formatTime(startTime1));
	});

	$("#set2").on("click",function(){
		startTime2 = $("#inputTime2").val();
		$("#timeLeft2").attr("data-time", startTime2);
		$("#timeLeft2").text(formatTime(startTime2));
	});
	//reset timers
	$("#reset1").on("click",function(){
		$("#timeLeft1").attr("data-time", startTime1);
		$("#timeLeft1").text(formatTime(startTime1));

	});
	$("#reset2").on("click",function(){
		$("#timeLeft2").attr("data-time", startTime2);
		$("#timeLeft2").text(formatTime(startTime2));
	});

	//start/stop countdown when clicking buttons
	$("#start1").on("click",function(){
		startTimer("#timeLeft1");
	});
	$("#stop1").on("click",function(){
		window.clearInterval(timeInterval1);
	});

	$("#start2").on("click",function(){
		startTimer("#timeLeft2");
	});
	$("#stop2").on("click",function(){
		window.clearInterval(timeInterval2);
	});

	//set time interval for clock updates and begin showing changes
	function startTimer(target) {
		if(target==="#timeLeft1"){	
			timeInterval1=window.setInterval(function(){updateTimerOutput(target)},1000);
		}
		if(target==="#timeLeft2"){	
			timeInterval2=window.setInterval(function(){updateTimerOutput(target)},1000);
		}
	}
	

	//update clock output every time interval passes
	function updateTimerOutput(target,) {
		var adjTime = $(target).attr("data-time");
		adjTime -= (1/60);
		if(adjTime>=0){
			$(target).attr("data-time", adjTime);
			$(target).text(formatTime(adjTime));
		}
		//if work timer has expired
		else if(target==="#timeLeft1"){
			alert("Time for a break!");
			window.clearInterval(timeInterval1);
		}
		//if break timer has expired
		else{
			alert("Get back to Work!");
			window.clearInterval(timeInterval2);
		}
	}
	//format timer output to ensure seconds always displays with two digits
	function formatTime(num){
		var startTimeMin = Math.floor(num);
		var startTimeSec = Math.floor(60*((num-startTimeMin) % 1));
		startTimeSec = ("0" + startTimeSec).slice(-2);
		return (startTimeMin+":"+startTimeSec);
	}

});


		