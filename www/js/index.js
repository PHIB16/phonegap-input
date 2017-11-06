$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var inpText = $('#textinput').val();
	alert(inpText);
    storeValue("StoredItem", inpText);
}

function storeValue(key, value) {
    
    
	window.localStorage.setItem(key, value);
}