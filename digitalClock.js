const Mytime = ()=> {
	let currentDate = new Date();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let session = "AM";
	
	if(hour == 0){
		hour = 12;
	}
	
	if(hour > 12){
		hour = hour - 12;
		session = "PM";
	}
	
	let time = hours + ":" + minutes + ":" + seconds + " " + session;
	
	document.getElementById("showtime").innerHTML = time;
}