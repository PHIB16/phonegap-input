


window.localStorage.setItem("age", "19");
window.localStorage.setItem("email", "cuck@cuckmail.com");
window.localStorage.setItem("Name",  "Ronnie McDonnie");

var age = window.localStorage.getItem("age");
var email = window.localStorage.getItem("email");
var Name = window.localStorage.getItem("Name");


	
$( document ).ready(function() {
    console.log( "ready!" );
    
    $("#age").text(age);
	$("#email").text(email);
	$("#Name").text(Name);

});
