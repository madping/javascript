/*
const DMMjs = require('dmm.js-serial');
const fluke8845 = new DMMjs('/dev/tty.usbserial-AL016M0B');
 
(async () => {
 
    await fluke8845.open();
    await fluke8845.linkDevice();
    let info = fluke8845.getDeviceInfo();
    console.log('Got device:', info.id, '( version', info.version, ')');
 
    let vMeas = await fluke8845.readDCVoltage();
    console.log('Read', vMeas, 'V');
});
*/

const DMMjs = require('/Users/han/dev/javascript/serial/node_modules/dmm.js-serial/lib/dmm.js');
const Util = require('/Users/han/dev/javascript/serial/node_modules/dmm.js-serial/examples/util.js');

(async () => {

    const fluke8845 = new DMMjs(Util.findxNixSerialPort());
    await fluke8845.open();
    
    await fluke8845.linkDevice();
    let info = fluke8845.getDeviceInfo();
    console.log('Got device:', info.id, '( version', info.version, ')');
    
    let vMeas = await fluke8845.readDCVoltage();
    console.log('Read', vMeas, 'V');

    await fluke8845.unlinkDevice();
    await fluke8845.close();

})();