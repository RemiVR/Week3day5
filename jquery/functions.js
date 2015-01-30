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
	$("#new_email input").val("");
	$("#new_email textarea").val("");
});

$("#send").bind("click", function(){
	$.post(SERVER + "/email", function(data){
		alert("Email sent");
		$("#blank-email").hide();
		$("#new_email input").val("");
		$("#new_email textarea").val("");
	});
});

$("#inbox").bind("click", function(){
	$.get(SERVER + "/email/new", function(data){
		$.each(data, function(emailId, email){
			console.log(email.subject)
		})
		// console.log(data)
	});
});

var emails = {
	112233: {
		subject: 'my subject...',

	}
};



