//This function will return a boolean value based on the range state
//It will return true only if the inputParameter is in specified range
function parameterIsInRange(inputParameter,rangeParameter){
    return inputParameter>=rangeParameter.low && inputParameter<=rangeParameter.high
}

function checkBatteryCondition(batteryCondition){
    console.log( batteryCondition? 'Battery is GOOD:)\n': 'Battery is RISKY:( \tAttention needed!\n\n' )
    return batteryCondition;
}

function printMishap(parameterState,mishapParameter){
    message = parameterState? mishapParameter+' is good': mishapParameter+' is out of Range:(';
    console.log(message)
}

function batteryIsOk(temperature, stateOfCharge, charge_rate,range) {

    const temperatureIsOk=parameterIsInRange(temperature,range.temperature)
    const stateOfChargeIsOk=parameterIsInRange(stateOfCharge,range.stateOfCharge)
    const chargeRateIsOk=parameterIsInRange(charge_rate,range.chargeRate)

    printMishap(temperatureIsOk,'Temperature')
    printMishap(stateOfChargeIsOk,'State Of Charge')
    printMishap(chargeRateIsOk,'Charge Rate')
        
     return checkBatteryCondition(temperatureIsOk && stateOfChargeIsOk && chargeRateIsOk) 

}

module.exports={ batteryIsOk}
