$(document).ready(function() {
   
	//set starting time and separate into minutes and seconds for display
	var status=0;
	var startTime1 = 3;
	var startTime2 = 2;
	var timeInterval1=null;
	var timeInterval2=null;

	//output starting time
	$("#startingTime1").text(formatTime(startTime1));
	$("#startingTime2").text(formatTime(startTime2));

	$("#timeLeft1").attr("data-time", startTime1);
	$("#timeLeft2").attr("data-time", startTime2);

	//start/stop countdown when clicking buttons
	$("#start1").on("click",function(){
		startTimer("#timeLeft1");
	});
	$("#stop1").on("click",function(){
		stopTimer("#timeLeft1");
	});

	$("#start2").on("click",function(){
		startTimer("#timeLeft2");
	});
	$("#stop2").on("click",function(){
		stopTimer("#timeLeft2");
	});

	//set time interval for clock updates (using seconds)
	function startTimer(target) {
		if(target==="#timeLeft1"){	
			timeInterval1=window.setInterval(function(){updateTimerOutput(target)},1000);
		}
		if(target==="#timeLeft2"){	
			timeInterval2=window.setInterval(function(){updateTimerOutput(target)},1000);
		}
	}
	
	function stopTimer(target){
		if(target==="#timeLeft1"){	
			window.clearInterval(timeInterval1);
		}
		if(target==="#timeLeft2"){	
			window.clearInterval(timeInterval2);
		}
	}
	function test(){
		$("#test").append("interval test");
	}

	//update clock output every time interval passes
	function updateTimerOutput(target) {
		var adjTime = $(target).attr("data-time");
		adjTime -= (1/60);
		$(target).attr("data-time", adjTime);
		$(target).text(formatTime(adjTime));
	}
	function formatTime(num){
		var startTimeMin = Math.floor(num);
		var startTimeSec = Math.floor(60*((num-startTimeMin) % 1));
		startTimeSec = ("0" + startTimeSec).slice(-2);
		return (startTimeMin+":"+startTimeSec);
	}

});


		