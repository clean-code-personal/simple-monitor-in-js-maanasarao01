
const inputParameters={
 english:{
  'temperature':"Temperature",
  'soc':"State Of Charge",
  'chargeRate':"Charge Rate"
 },
german:{
  'temperature':"Temperatur",
  'soc':"Ladezustand",
  'chargeRate':"Ladegeschwindigkeit"
 },
kannada:{
  'temperature':"ತಾಪಮಾನ",
  'soc':"ಚಾರ್ಜ್ ಸ್ಥಿತಿ",
  'chargeRate':"ಚಾರ್ಜ್ ದರ"
 },
 hindi:{
  'temperature':"तापमान ",
  'soc': "चार्ज की स्थिति ",
  'chargeRate': "चार्ज दर" 
 },
 spanish:{
  'temperature':"Temperatura",
  'soc': "Estado de carga",
  'chargeRate': "Tasa de carga" ,
 }
}

const languages={
 english:{
    'peak': ' is approaching peak [!]',
    'discharge': ' is approaching discharge [!]',
    'allOk': ' is Ok',
     notOk: ' is out of range :['
  },
 german:{
    'peak':"nähert sich dem Höhepunkt [!]",
    'discharge': "nähert sich der Entladung [!]",
    'allOk': "ist in Ordnung",
     notOk: "ist außerhalb des Bereichs :["
},
 kannada:{
    'peak': "ಶಿಖರಕ್ಕೆ ಹತ್ತುತ್ತಿದೆ [!]",
    'discharge':"ಬಿಡುಗಡೆಯ ಹಂತಕ್ಕೆ ಬರುತ್ತಿದೆ [!]",
    'allOk': "ಸರಿಯಾಗಿದೆ",
     notOk: "ಬಿಗಿಯಾಗಿದೆ :["
 },
hindi:{
    'peak': "शिखर के पास आ रहा है [!]",
    d'ischarge': "छूटने के पास आ रहा है [!]",
    'allOk': "ठीक है",
     notOk: "रेंज से बाहर है :["
},
spanish:{
    'peak': "se acerca al pico [!]",
    'discharge': "se acerca a la descarga [!]",
    'allOk': "está bien",
     notOk: "está fuera de rango :["
}
}
module.exports={inputParameters, languages}
