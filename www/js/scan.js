var dataNum = 0;
var scanapp = {
	goScan: function(){
		this.bindEvents();
	},
	/**
	 * [bindEvents description]
	 * define event listener
	 * @return {[type]} [description]
	 * no return
	 */
	bindEvents: function(){
		//start scan listener button DOM id=scanBtn
		var scanBtn = document.getElementById("scanBtn");
		scanBtn.addEventListener('click', this.deviceScan, false);
		//stop scan listener button DOM id=stopScanBtn
		var stopScanBtn = document.getElementById("stopScanBtn");
		stopScanBtn.addEventListener('click', this.deviceStopScan, false);
	},

	deviceScan: function(){
		console.log("scanning!");
		ble.startScan([], function(device){
			console.log("here is scan device!");
			//document.body.removeChild(document.getElementById("error"));
			var obj = JSON.parse(JSON.stringify(device));
			console.log(obj);	
			var dataBody = document.getElementById("scanData");
			var dataTr = document.createElement("tr");
			var dataId = document.createElement("th");
			var dataName = document.createElement("th");
			var dataUUID = document.createElement("th");
			var dataRSSI = document.createElement("th");
			var dataIdText  = document.createTextNode((dataNum+1));
			var dataNameText = document.createTextNode(obj.name.toString());
			var dataUUIDText = document.createTextNode(obj.id.toString());
			var dataRSSIText = document.createElement(obj.rssi.toString());
			dataId.appendChild(dataIdText);
			dataName.appendChild(dataNameText);
			dataUUID.appendChild(dataUUIDText);
			dataRSSI.appendChild(dataRSSIText);
			dataTr.appendChild(dataId);
			dataTr.appendChild(dataName);
			dataTr.appendChild(dataUUID);
			dataTr.appendChild(dataRSSI);
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

		/*setTimeout(ble.stopScan, scanSeconds*1000,
			function(){
				console.log("Scan complete");
			},
			function(){
				console.log("stopScan faild");
			});*/
	},

	deviceStopScan: function(){
		console.log("stop scan!");
		ble.stopScan(
			function(){console.log("stop scan!");},
			function(){console.log("stop scan faild!");});
	}
}
scanapp.goScan();