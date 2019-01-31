// console.log('Main js loaded');

var calculation = [];

function pushNumber(event) {
    var number = parseInt(event.target.firstChild.data);
    addToCalculation(number);
}
var numberElements = document.getElementsByClassName("number");

for (var i = 0; i < numberElements.length; i++) {
    numberElements[i].addEventListener('click', pushNumber, false);
}

function pushOperator(event){
    var operator = event.target.firstChild.data;
    addToCalculation(operator);
}
var operatorElements = document.getElementsByClassName("operator");

for (var i = 0; i < operatorElements.length; i++) {
    operatorElements[i].addEventListener('click', pushOperator, false);
}
function getCalculationString() {
    var calculationString = '';
    for (var i = 0; i < calculation.length; i++ ) {
        calculationString += calculation[i];
    }
    return calculationString;
}

function calculate() {
    alert(getCalculationString());
    calculation = [];
}
var equalElement = document.getElementById("equal");

equalElement.addEventListener('click', calculate, false);

function addToCalculation(value) {
    calculation.push(value);
    var displayElement = document.getElementById("display");
    displayElement.innerHTML = getCalculationString();
}
