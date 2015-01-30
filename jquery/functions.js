$(document).ready(function(){

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

// Review email content
$("#emails li").bind("click", function(){
	$("#emails li").fadeOut();
	var id = $(this).data("id");
	var url = SERVER + "/email/" + id;
	$.get(url, function(data){
		console.log(data);
		// $("#readEmail").html("<h3>From: " + data.from + "</h3>" + "<p>" + data.subject + "</p>" + data.preview).show();
		$("#readEmail").fadeIn();
			$(".fromInside").html(data.from);
			$(".subjectInside").html(data.subject);
			$(".allEmailText").html(data.preview);
	});
});

//Inbox content
$("#backoff").bind("click", function(){
	$("#readEmail").fadeOut();
	$("#emails li").fadeIn();
});

$("#indexTab").bind("click", function(){
	$("#emails li").fadeIn();
	$("#readEmail").fadeOut();
});

$("#emails li").bind("click", function(){
		$(".starred").toggle();
});

// $("#emails li").click(function(){
// 	$("#readEmail").show();
// });
// var emails = {
// 	112233: {
// 		subject: 'my subject...',

// 	}
});

























