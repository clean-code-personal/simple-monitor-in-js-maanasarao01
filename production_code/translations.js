const mishapParameter,language=require('../bms-monitor.js)

const inputParameters={
 english:{
  temperature:"Temperature",
  soc:"State Of Charge",
  chargeRate:"Charge Rate"
 },
german:{
  temperature:"Temperatur",
  soc:"Ladezustand",
  chargeRate:"Ladegeschwindigkeit"
 },
kannada:{
  temperature:"ತಾಪಮಾನ",
  soc:"ಚಾರ್ಜ್ ಸ್ಥಿತಿ",
  chargeRate:"ಚಾರ್ಜ್ ದರ"
 },
 hindi:{
  temperature:"तापमान ",
  soc: "चार्ज की स्थिति ",
  chargeRate: "चार्ज दर" 
 },
 spanish:{
  temperature:"Temperatura",
  soc: "Estado de carga",
  chargeRate: "Tasa de carga" ,
 }
}

function notifyRiskyParameter(){
  return inputParameters.language.mishapParameter
}

const riskyParameter=notifyRiskyParameter();

const languages={
 english:{
    peak: riskyParameter+' is approaching peak [!]',
    discharge: riskyParameter+' is approaching discharge [!]',
    allOk: riskyParameter+' is Ok',
    notOk: riskyParameter+' is out of range :['
  },
 german:{
    peak: riskyParameter+ "nähert sich dem Höhepunkt [!]",
    discharge: riskyParameter+ "nähert sich der Entladung [!]",
    allOk: riskyParameter+"ist in Ordnung",
    notOk: riskyParameter+"ist außerhalb des Bereichs :["
},
 kannada:{
 {
    peak: riskyParameter+"ಶಿಖರಕ್ಕೆ ಹತ್ತುತ್ತಿದೆ [!]",
    discharge:riskyParameter+"ಬಿಡುಗಡೆಯ ಹಂತಕ್ಕೆ ಬರುತ್ತಿದೆ [!]",
    allOk: riskyParameter+"ಸರಿಯಾಗಿದೆ",
    notOk: riskyParameter+"ಬಿಗಿಯಾಗಿದೆ :["
 },
hindi:{
    peak: riskyParameter+"शिखर के पास आ रहा है [!]",
    discharge: riskyParameter+"छूटने के पास आ रहा है [!]",
    allOk: riskyParameter+"ठीक है",
    notOk: riskyParameter+"रेंज से बाहर है :["

},
spanish:{
    peak: riskyParameter+"se acerca al pico [!]",
    discharge: riskyParameter+"se acerca a la descarga [!]",
    allOk: riskyParameter+"está bien",
    notOk: riskyParameter+"está fuera de rango :["
}
}
module.exports={languages}
