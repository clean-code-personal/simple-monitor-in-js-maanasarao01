const {expect}=require('chai')
const range=require('./limitsManual.js')
const {batteryIsOk}=require('./bms-monitor.js')

//thermal check
expect(batteryIsOk(-10, 70, 0.7,range)).to.be.false;
expect(batteryIsOk(50, 70, 0.7,range)).to.be.false;
//stateOfCharge error
expect(batteryIsOk(10, 10, 0.7,range)).to.be.false;
expect(batteryIsOk(81, 70, 0.7,range)).to.be.false;
//chargeRate check
expect(batteryIsOk(40, 78, -2,range)).to.be.false;
expect(batteryIsOk(25, 50, 0.85,range)).to.be.false;

//All Is Ok check
expect(batteryIsOk(25, 70, 0.7,range)).to.be.true;
expect(batteryIsOk(10, 20, 0.7,range)).to.be.true;

