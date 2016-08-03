var dataNum = 0;
var scanapp = {
	goScan: function(){
		this.bindEvents();
	},
	bindEvents: function(){
		var scanBtn = document.getElementById("scanBtn");
		scanBtn.addEventListener('click', this.deviceScan, false);
	},

	deviceScan: function(){
		var scanSeconds = 5; //scan 10 seconds

		
		ble.startScan([], function(device){
			console.log("here is scan device!");
			//document.body.removeChild(document.getElementById("error"));
			var obj = JSON.parse(JSON.stringify(device));
			console.log(obj);
			//var obj = JSON.parse(device);
			//console.log(obj.id);
			var dataBody = document.getElementById("scanData");
			var dataTr = document.createElement("tr");
			var dataId = document.createElement("th");
			var dataName = document.createElement("th");
			var dataUUID = document.createElement("th");
			var dataIdText  = document.createTextNode(1);
			var dataNameText = document.createTextNode(obj.name.toString());
			var dataUUIDText = document.createTextNode(obj.id.toString());
			dataId.appendChild(dataIdText);
			dataName.appendChild(dataNameText);
			dataUUID.appendChild(dataUUIDText);
			dataTr.appendChild(dataId);
			dataTr.appendChild(dataName);
			dataTr.appendChild(dataUUID);
			dataBody.appendChild(dataTr);
		},function(reason){
			console.log("doesn't scan devices!");
			console.log(reason);
			var errorBody = document.createElement("p");
			errorBody.id = "error";
			var errorBodyText = document.createTextNode("Beacon scan faild "+reason);
			errorBody.appendChild(errorBodyText);
			document.body.appendChild(errorBody);
		});

		setTimeout(ble.stopScan, scanSeconds*1000,
			function(){
				console.log("Scan complete");
			},
			function(){
				console.log("stopScan faild");
			});
	}
}
scanapp.goScan();