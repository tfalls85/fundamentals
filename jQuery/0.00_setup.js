$(document).ready(function(){
	// alert("Hello World!");

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(2000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", { pieces: 1000 }, 200);
	});

	$("#slideUp").click(function(){
		$("#image").slideUp(5000).slideDown(5000);
	});
});