$(document).ready(function(){
	console.log("main.js is now working")

	var $bike = $("#bike");
	var fWheel = ("#front-wheel");
	var $wheels = $(".wheels");
	
	$("#btn-1").click(function(){
		TweenMax.to($bike, 1, {x:1000})
	});
	$("#btn-2").click(function(){
		var tl = new TimelineMax({repeat: -1})
		tl
			.add("start")
			.to('.wheels', 0.2, {rotation: "360deg"}, "start")
			// .to('#carriage', 0.2, {rotation: "360deg"}, "start")
	});
	$("#btn-3").click(function(){
		TweenMax.from($bike, 1, {x:-1000})
	});
	$("#btn-4").click(function(){
		TweenMax.from($bike, 1, {x:-1000})
	});


});