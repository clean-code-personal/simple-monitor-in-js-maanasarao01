//This function will return a boolean value based on the range state
//It will return true only if the inputParameter is in specified range
function parameterIsInRange(inputParameter,rangeParameter){
    return inputParameter>=rangeParameter.low && inputParameter<=rangeParameter.high
}

function checkTolerance(inputParameter, rangeParameter) {
    const peakThreshold = rangeParameter.high - rangeParameter.tolerance;
    const dischargeThreshold = rangeParameter.low + rangeParameter.tolerance;
    
    return inputParameter >= peakThreshold?' is approaching peak [!]':
        inputParameter <= dischargeThreshold?' is approaching discharge [!]':' IS OK :)'
    
}


function checkBatteryCondition(batteryCondition){
    return batteryCondition
}

function printMishap(parameterState, mishapParameter,tolerenceLevel) {
    console.log(!parameterState?`${mishapParameter} is out of Range:(`: mishapParameter+tolerenceLevel)
}

function batteryIsOk(temperature, stateOfCharge, charge_rate, range) {
    const temperatureIsOk = parameterIsInRange(temperature, range.temperature);
    const stateOfChargeIsOk = parameterIsInRange(stateOfCharge, range.stateOfCharge);
    const chargeRateIsOk = parameterIsInRange(charge_rate, range.chargeRate);

    // Create functions that capture the current state of temperature, stateOfCharge, and charge_rate
    const temperatureCheckTolerance = checkTolerance(temperature, range.temperature);
    const stateOfChargeCheckTolerance = checkTolerance(temperature, range.temperature);
    const chargeRateCheckTolerance = checkTolerance(temperature, range.temperature);

    printMishap(temperatureIsOk, 'Temperature',temperatureCheckTolerance);
    printMishap(stateOfChargeIsOk, 'State Of Charge',stateOfChargeCheckTolerance);
    printMishap(chargeRateIsOk, 'Charge Rate',chargeRateCheckTolerance);

    return checkBatteryCondition(temperatureIsOk && stateOfChargeIsOk && chargeRateIsOk);
}

module.exports = { batteryIsOk };
