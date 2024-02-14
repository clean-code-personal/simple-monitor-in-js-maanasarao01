
//An object that keeps track of limits
const range={
  temperature:{
    low:0,
    high:45,
    tolerance:2.25
  },
  stateOfCharge:{
    low:20,
    high:80,
    tolerance:4
  },
  chargeRate:{
    low:0,
    high:0.8,
    tolerance:0.032
  }
};

module.exports={range}
