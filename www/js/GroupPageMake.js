$("#submitBtn").on("click", function(event) {
	//alert("群組名稱: " + $("input[name='groupName']").val() + "  權限: " + $("select[name='groupOpen']").val());
	var data = {groupName: $("input[name='groupName']").val(), groupOpen: $("select[name='groupOpen']").val()};
	var serverReplyMsg;
	$.ajax({
		url: "http://140.130.35.62/csie40343142/Tour_System_server/php/GroupListAdd.php",
		type: "POST",
		data: data,
		dataType: "text",
		success: function(result){
			serverReplyMsg = result;
			
			//alert(result);
		},
		error: function(){

		}
	});
	event.preventDefault();  //將submit ajax傳送關閉
});