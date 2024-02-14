//This function will return a boolean value based on the range state
//It will return true only if the inputParameter is in specified range
function parameterIsInRange(inputParameter,rangeParameter){
    return inputParameter>=rangeParameter.low && inputParameter<=rangeParameter.high
}

function checkTolerance(parameterIsInRange) {
    return function() {
        const tolerance = rangeParameter.tolerance; // Using rangeParameter here
        return inputParameter >= rangeParameter.high - tolerance && inputParameter <= rangeParameter.high ? 'peak' :
            inputParameter >= rangeParameter.low && inputParameter <= rangeParameter.low + tolerance ? 'discharge' :
            'all is well';
    };
}

function printMishap(parameterState, mishapParameter) {
    const toleranceLevel = checkTolerance(parameterIsInRange)();
    const message = parameterState ?
        (toleranceLevel === 'peak' ? `${mishapParameter} is approaching Peak value[!]` :
            toleranceLevel === 'discharge' ? `${mishapParameter} is approaching discharge[!]` :
                `${mishapParameter} is good`) :
        `${mishapParameter} is out of Range:(`;
    console.log(message);
}

function batteryIsOk(temperature, stateOfCharge, charge_rate, range) {
    const temperatureIsOk = parameterIsInRange(temperature, range.temperature);
    const stateOfChargeIsOk = parameterIsInRange(stateOfCharge, range.stateOfCharge);
    const chargeRateIsOk = parameterIsInRange(charge_rate, range.chargeRate);

    // Create functions that capture the current state of temperature, stateOfCharge, and charge_rate
    const temperatureCheckTolerance = checkTolerance(parameterIsInRange);
    const stateOfChargeCheckTolerance = checkTolerance(parameterIsInRange);
    const chargeRateCheckTolerance = checkTolerance(parameterIsInRange);

    printMishap(temperatureIsOk, 'Temperature');
    printMishap(stateOfChargeIsOk, 'State Of Charge');
    printMishap(chargeRateIsOk, 'Charge Rate');

    return checkBatteryCondition(temperatureIsOk && stateOfChargeIsOk && chargeRateIsOk);
}

module.exports = { batteryIsOk };
