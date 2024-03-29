const {expect}=require('chai')
const {range} = require('./production_code/limitsManual.js');
const {batteryIsOk}=require('./production_code/bms-monitor.js')
const { inputParameters, languages } = require('./production_code/translations.js');

describe('Trying to mistake-proof the contents in translations', function() {
    // Existing tests for functionality
    
    it('should have translations for all keys in inputParameters for all languages', function() {
        Object.keys(inputParameters).forEach(language => {
            Object.keys(inputParameters[language]).forEach(key => {
                expect(inputParameters[language][key]).to.be.a('string').that.is.not.empty;
            });
        });
    });

    it('should have translations for all keys in languages for all languages', function() {
        Object.keys(languages).forEach(language => {
            Object.keys(languages[language]).forEach(key => {
                expect(languages[language][key]).to.be.a('string').that.is.not.empty;
            });
        });
    });
});


describe('Battery Monitoring System', function() {
    it('should return false for out of range parameters', function() {
        //thermal check
        expect(batteryIsOk(-10, 70, 0.7, range,'kannada')).to.be.false;
        expect(batteryIsOk(50, 70, 0.5, range,'english')).to.be.false;
        //stateOfCharge error
        expect(batteryIsOk(43, 10, 0.4, range,'german')).to.be.false;
        expect(batteryIsOk(30, 81, 0.6, range,'hindi')).to.be.false;
        //chargeRate check
        expect(batteryIsOk(40, 78, -2, range,'spanish')).to.be.false;
        expect(batteryIsOk(25, 50, 0.85, range,'hindi')).to.be.false;
    });

    it('should return true for within range parameters', function() {
        expect(batteryIsOk(2, 70, 0.7, range,'kannada')).to.be.true;
        expect(batteryIsOk(25, 76, 0.7, range,'english')).to.be.true;
        expect(batteryIsOk(10, 20, 0.7, range,'german')).to.be.true;
    });
});

