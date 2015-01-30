// $("#compose").text("Hello");
var SERVER = 'https://vast-earth-2490.herokuapp.com'

// New mail window
$("#compose").bind("click",function(){
	$("#blank-email").fadeIn();
});

$("#blank-close").bind("click",function(){
	$("#blank-email").fadeOut();
});

$("#trash").bind("click", function(){
	alert("Message has been deleted");
	$("#blank-email").hide();
});
$("#send").bind("click", function(){
	$.post(SERVER + "/email", function(data){
		alert("Email sent");
		$("#blank-email").hide();
		$("#blank-to").text("");
	});
});