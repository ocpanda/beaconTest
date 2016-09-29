/**
 * 群組頁面畫面渲染
 */
var pages = ["#List", "#Make", "#Add"];
var nowPage = 0;

$(document).on("pageshow", function(){
	pageTopBKColorInit();
	pageRender();
	$.ajax({
		type:"GET",
		url:"group.html",
		async:false,
		dataType:"html",
		success: function(data){
			$("#groupMainContent").html($(data).find(pages[0]).html());
		},
    	error: function(XMLHttpRequest, textStatus, errorThrown){
    		console.log("XMLHttpRequest status:"+XMLHttpRequest.status);
    		console.log("XMLHttpRequest readyStatus:"+XMLHttpRequest.readyState);
    		console.log("textStatus:"+textStatus);
    	}
	});
});

$("#groupListBtn").on("click", function(){
	nowPage = 0;
	pageTopBKColorInit();
	pageRender();
	htmlInject();
});

$("#groupMakeBtn").on("click", function(){
	nowPage = 1;
	pageTopBKColorInit();
	pageRender();
	htmlInject();
});

$("#groupAddBtn").on("click", function(){
	nowPage = 2;
	pageTopBKColorInit();
	pageRender();
	htmlInject();
});
/**
 * [pageTopBKColorInit 將上方工具列選項顏色初始化]
 */
function pageTopBKColorInit(){
	$("#groupListBtn").css("background", "white");
	$("#groupMakeBtn").css("background", "white");
	$("#groupAddBtn").css("background", "white");
}

/**
 * [pageRender 上方工具列渲染]
 */
function pageRender(){
	switch(nowPage){
		case 0:
			$("#groupListBtn").css("background", "#6666FF");
			break;

		case 1:
			$("#groupMakeBtn").css("background", "#6666FF");
			break;

		case 2:
			$("#groupAddBtn").css("background", "#6666FF");
			break;
	}
}

/**
 * [htmlInject ajax注入html內容至頁面]
 */
function htmlInject(){
	$.ajax({
		type:"GET",
		url:"group.html",
		async:false,
		dataType:"html",
		success: function(data){
			$("#groupMainContent").html($(data).find(pages[nowPage]).html());
		},
    	error: function(XMLHttpRequest, textStatus, errorThrown){
    		console.log("XMLHttpRequest status:"+XMLHttpRequest.status);
    		console.log("XMLHttpRequest readyStatus:"+XMLHttpRequest.readyState);
    		console.log("textStatus:"+textStatus);
    	}
	});
}