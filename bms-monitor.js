//This function will return a boolean value based on the range state
//It will return true only if the inputParameter is in specified range
function rangeState(inputParameter,rangeParameter){
    return inputParameter>=rangeParameter.low && inputParameter<=rangeParameter.high
}

function checkBatteryCondition(batteryCondition){
    return batteryCondition;
}

function printMishap(parameterState,mishapParameter){
    message =parameterState? mishapParameter+'is good:)': mishapParameter+'is out of Range:(';
    console.log(message)
}

function batteryIsOk(temperature, stateOfCharge, charge_rate,range) {

    const temperatureRange=rangeState(temperature,range.temperature)
    const stateOfChargeRange=rangeState(stateOfCharge,range.stateOfCharge)
    const chargeRateRange=rangeState(charge_rate,range.chargeRate)

    printMishap(temperatureRange,'Temperature')
    printMishap(stateOfChargeRange,'State Of Charge')
    printMishap(chargeRateRange,'Charge Rate')
        
    return checkBatteryCondition(temperatureRange && stateOfChargeRange && chargeRateRange) 

}

module.exports={ batteryIsOk}
