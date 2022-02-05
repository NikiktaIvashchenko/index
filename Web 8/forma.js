$("#otpr").on("click", function() {
    var name = $("#name").val().trim();
	var email = $("#email").val().trim();
	var message = $("#message").val().trim();
	if(name == "")
		{$("#oshib").text("Введите имя");
		return false;}
	else if(email == ""){
		$("#oshib").text("Некорректный e-mail");
		return false;
		}
	else if(message.length < 2) {
		$("#oshib").text("Подробнее, пожалуйста");
		return false;
    }

	$("#oshib").text("");
	localStorage.setItem('email',email);
	localStorage.setItem('name',name);
	localStorage.setItem('message',message);

    
	
	$.ajax({
    method: "POST",
    url: "https://formcarry.com/s/j89PyHCFwe",
    data: {  'name':name, 'email':email, 'message':message }
    })
    
	$("#email").val("");
	$("#name").val("");
	$("#message").val("");
});
