const {expect}=require('chai')
const {range} = require('./production_code/limitsManual.js');
const {batteryIsOk}=require('./production_code/bms-monitor.js')

describe('Battery Monitoring System', function() {
    it('should return false for out of range parameters', function() {
        //thermal check
        expect(batteryIsOk(-10, 70, 0.7, range,'kannada')).to.be.false;
        expect(batteryIsOk(50, 70, 0.5, range,'english')).to.be.false;
        //stateOfCharge error
        expect(batteryIsOk(43, 10, 0.4, range,'english')).to.be.false;
        expect(batteryIsOk(30, 81, 0.6, range,'hindi')).to.be.false;
        //chargeRate check
        expect(batteryIsOk(40, 78, -2, range)).to.be.false;
        expect(batteryIsOk(25, 50, 0.85, range)).to.be.false;
    });

    it('should return true for within range parameters', function() {
        expect(batteryIsOk(2, 70, 0.7, range)).to.be.true;
        expect(batteryIsOk(25, 76, 0.7, range)).to.be.true;
        expect(batteryIsOk(10, 20, 0.7, range)).to.be.true;
    });
});

