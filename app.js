console.log("Hello World")
const sum = (a,b) =>{
    return a + b
}
console.log(sum(7,3))
let oneEurols = {
    "JPY" : 156.65,
    "USD" : 1.07,
    "GBP" : 0.87,
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro *1.07;
    return valueInDollar;
}
const fromDollarToYen =function(valueInDollar){
    let euros = valueInDollar / 1.07
    let valueInYen = euros * 156.65
    return valueInYen
}
const fromYenToPound =function(valueInYen){
    let euros = valueInYen / 156.65
    let valueInPound = euros * 0.87
    return valueInPound
}
module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};
