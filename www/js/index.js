$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var inpText = $('#textinput').val();
	alert(text);
    storeValue();
}

function storeValue(key, value) {
    
	window.localStorage.setItem("storedValue", inpText);
}