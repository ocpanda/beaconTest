var scanapp = {
	goScan: function(){
		this.bindEvents();
	},
	bindEvents: function(){
		var scanBtn = document.getElementById("scanBtn");
		scanBtn.addEventListener('click', this.deviceScan, false);
	},

	deviceScan: function(){
		var scanSeconds = 10; //scan 10 seconds

		var dataNum = 0;
		ble.startScan([], function(device){
			document.body.removeChild(document.getElementById("error"));
			console.log(device);
			var obj = JSON.parse(device);
			var dataBody = document.getElementById("scanData");
			var dataTr = document.createElement("tr");
			var dataId = document.createElement("th");
			var dataName = document.createElement("th");
			var dataUUID = document.createElement("th");
			var dataIdText  = document.createTextNode((dataNum+1));
			var dataNameText = document.createTextNode(obj.name);
			var dataUUIDText = document.createTextNode(obj.id);
			dataId.appendChild(dataIdText);
			dataName.appendChild(dataNameText);
			dataUUID.appendChild(dataUUIDText);
			dataTr.appendChild(dataId);
			dataTr.appendChild(dataName);
			dataTr.appendChild(dataUUID);
			dataBody.appendChild(dataTr);
			dataNum+=1;
		},function(reason){
			var errorBody = document.createElement("p");
			errorBody.id = "error";
			var errorBodyText = document.createTextNode("Beacon scan faild "+reason);
			errorBody.appendChild(errorBodyText);
			document.body.appendChild(errorBody);
		});

		setTimeout(ble.stopScan, scanSeconds*1000,
			function(){
				var errorBody = document.createElement("p");
				errorBody.id = "error";
				var errorBodyText = document.createTextNode("scan complete");
				errorBody.appendChild(errorBodyText);
				document.body.appendChild(errorBody);
				console.log("Scan complete");
			},
			function(){
				console.log("stopScan faild");
			});

		var aa = document.createElement("p");
		var aaText = document.createTextNode("scan complete");
		aa.appendChild(aaText);
		document.body.appendChild(aa);
	}
}
scanapp.goScan();