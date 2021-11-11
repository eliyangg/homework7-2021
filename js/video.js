

var video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down");
	console.log(video.playbackRate);
	video.playbackRate = video.playbackRate*(0.95);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up");
	console.log(video.playbackRate);
	video.playbackRate = video.playbackRate*(1.05);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip");

	if (video.currentTime >= 52.4){
		video.currentTime = 0;
		console.log(video.currentTime)
	}
	else{
		video.currentTime = video.currentTime + 15; 
		console.log(video.currentTime)
	}

});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	isMuted(video.muted);
});

function isMuted(x){
	
	var text = document.getElementById("mute");

	if (x == true){
		video.muted = false;
		text.firstChild.data = "Mute";
	}
	else{
		video.muted = true;
		text.firstChild.data = "Unmute";
	}

}

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Volume");
	console.log(document.getElementById("slider").value);
	video.volume = (document.getElementById("slider").value)/100;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";

});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("OldSchool")
	video.setAttribute("class", "oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original")
	video.setAttribute("class", "video")
});

