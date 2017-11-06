$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var inpText = $('#textinput').val();
	alert(text);
    storeValue("StoredItem", inpText);
}

function storeValue(key, value) {
    
    
	window.localStorage.setItem(key, value);
}