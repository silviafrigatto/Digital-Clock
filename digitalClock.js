const Mytime =() => {
	let currentDate = new Date();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let session = "AM";
	
	if(hours == 0){
		hours = 12;
	}
	
	if(hours > 12){
		hours = hours - 12;
		session = "PM";
	}
	
	hours = (hours < 10) ? "0" + hours : hours;
	
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	
	seconds= (seconds < 10) ? "0" + seconds : seconds;
	
	let time = hours + ":" + minutes + ":" + seconds + " " + session;
	
	document.getElementById("showTime").innerHTML = time;
	
	setTimeout(Mytime, 1000);
}

Mytime();