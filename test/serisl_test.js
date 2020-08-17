const SerialPort = require("serialport");

SerialPort.list().then(ports => {
	
	ports.forEach(function(port) {

		console.log("###################################################");
		
		console.log("comName : ", port.comName);
		
		console.log("---------------------------------------------------");
		
		console.log("pnpId : ", port.pnpId);
		
		console.log("---------------------------------------------------");
		
		console.log("manufacturer : ", port.manufacturer);
		
		console.log("###################################################");
		
	});
});