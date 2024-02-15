const {inputParameters, languages}=require('./translations.js')

//This function will return a boolean value based on the range state
//It will return true only if the inputParameter is in specified range
function parameterIsInRange(inputParameter,rangeParameter){
    return inputParameter>=rangeParameter.low && inputParameter<=rangeParameter.high
}

function checkTolerance(inputParameter, rangeParameter) {
    const peakThreshold = rangeParameter.high - rangeParameter.tolerance;
    const dischargeThreshold = rangeParameter.low + rangeParameter.tolerance;
    
    return inputParameter >= peakThreshold?'peak':
        inputParameter <= dischargeThreshold?'discharge':'allOk'
    
}


function checkBatteryCondition(batteryCondition){
    return batteryCondition
}

function printMishap(parameterState, mishapParameter,tolerenceLevel,language) {
    const riskyParameter=inputParameters.language.mishapParameter
    const alertMessage=languages.language.tolerencelevel
    console.log(!parameterState?riskyParameter+languages.language.notOk: riskyParameter+alertMessage)
}

function batteryIsOk(temperature, stateOfCharge, charge_rate, language, range) {
    const temperatureIsOk = parameterIsInRange(temperature, range.temperature);
    const stateOfChargeIsOk = parameterIsInRange(stateOfCharge, range.stateOfCharge);
    const chargeRateIsOk = parameterIsInRange(charge_rate, range.chargeRate);

    // Create functions that capture the current state of temperature, stateOfCharge, and charge_rate
    const temperatureTolerance = checkTolerance(temperature, range.temperature);
    const stateOfChargeTolerance = checkTolerance(temperature, range.temperature);
    const chargeRateTolerance = checkTolerance(temperature, range.temperature);

    printMishap(temperatureIsOk, 'Temperature',temperatureTolerance,language);
    printMishap(stateOfChargeIsOk, 'State Of Charge',stateOfChargeTolerance,language);
    printMishap(chargeRateIsOk, 'Charge Rate',chargeRateTolerance,language);

    return checkBatteryCondition(temperatureIsOk && stateOfChargeIsOk && chargeRateIsOk);
}

module.exports = { batteryIsOk };
