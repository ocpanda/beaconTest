/**
 *request group data with server 140.130.35.62
 * 
 * @return {groupData:JSON}
 */
$("#submitBtn").on("click", function(){
	var groupName = $("#groupName").val;
	var groupOpen = $("#groupOpen:checked").val;

	alert("groupName:"+groupName);
	alert("groupOpen:"+groupOpen);
});

/*function showGroupList(){
	$.ajax{
		url: "http://140.130.35.62/csie40343142/Tour_System_server/php/GroupListAdd.php",
		type: "POST",

	}
}*/