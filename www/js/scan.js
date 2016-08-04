/**
 * Beacon data storage class
 * use for local storage
 * call this class to put your data into local storage
 */
function BeaconDataStorage(){
	this.dataStorage = window.localStorage;
}

BeaconDataStorage.prototype.getData = function(key){
	return this.dataStorage.getItem(key);
}

BeaconDataStorage.prototype.setData = function(key, item){
	this.dataStorage.setItem(key, item);
}

BeaconDataStorage.prototype.removeData = function(key){
	this.dataStorage.removeItem(key);
}

BeaconDataStorage.prototype.clearData = function(){
	this.dataStorage.clear();
}
/**
 * Beacon data storage class
 */

/**
 * Beacon data property
 */
function BeaconDataProperty(UUID, name, rssi){
	this.UUID = UUID;
	this.name = name;
	this.rssi = rssi;
}
/**
 * Beacon data property
 */

var dataNum = 0;
var beaconDataStorage = new BeaconDataStorage();
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
		//var stopScanBtn = document.getElementById("stopScanBtn");
		//stopScanBtn.addEventListener('click', this.deviceStopScan, false);
	},

	deviceScan: function(){
		var scanSeconds = 5;

		console.log("scanning!");
		ble.startScan([], function(device){
			console.log("here is scan device!");
			//document.body.removeChild(document.getElementById("error"));
			var obj = JSON.parse(JSON.stringify(device));
			console.log(obj);
			//beaconDataStorage.setData(beaconData.UUID, beaconData);
			var beaconData = new BeaconDataProperty(obj.id.toString(), obj.name.toString(), obj.rssi.toString());
			$("#scanData").append("<tr>"+
						"<th>"+beaconData.name+"</th>"+
						"<th>"+beaconData.UUID+"</th>"+
						"<th>"+beaconData.rssi+"</tr>");
			
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
	},

	/*deviceStopScan: function(){
		console.log("stop scan!");
		ble.stopScan(
			function(){console.log("stop scan!");},
			function(){console.log("stop scan faild!");});
	}*/
}
scanapp.goScan();