
// This is just setting up event listeners

// Add event listeners for the operator elements

var operatorElements = document.getElementsByClassName("operator");
for (var i = 0; i < operatorElements.length; i++) {
    operatorElements[i].addEventListener('click', pushOperator, false);
}

// Add event listeners for the number elements

var numberElements = document.getElementsByClassName("number");
for (var i = 0; i < numberElements.length; i++) {
    numberElements[i].addEventListener('click', pushNumber, false);
}

// Add event listeners for the equals button

let equalElement = document.getElementById("equal");
equalElement.addEventListener('click', calculate, false);

let clearElement = document.getElementById("clear");
clearElement.addEventListener('click', clearDisplay, false);

// Calculation
var calculation = [];

// Number buffer will hold our number values
// to create numbers greater than 1 digit
var numberBuffer = "";

//-----------------------------------------------------------------------

// Functions

function clearDisplay() {
	numberBuffer = "";
	calculation = [];
    document.getElementById('display').innerHTML = "0";
}

// Adds number to an array
function pushNumber(event) {

    var number = parseInt(event.target.firstChild.data);
//     addToCalculation(number); // We don't want to push until we have all the digits

	numberBuffer += number; //Add to our buffer if there'

    let displayElement = document.getElementById("display");
    displayElement.innerHTML = numberBuffer;
}

// Adds operator to array
function pushOperator(event){

	if (numberBuffer !== "") {
		addToCalculation(numberBuffer); // Add number buffer when they press +, -. *, or /
        console.log(numberBuffer);
	}

    let operator = event.target.firstChild.data;
    addToCalculation(operator);
    numberBuffer = "";
}

function addToCalculation(value) {
    calculation.push(value);
}

function calculate() {

    if (numberBuffer !== "") {
		addToCalculation(numberBuffer);
	}

    var total = 0;
    var buffer;
    calculation.forEach(function(value) {
        let numberValue = parseInt(value);
        if (Number.isInteger(numberValue)) {
            if (buffer === undefined) {
                total = numberValue
            } else if (buffer === "+") {
                total = total + numberValue;
            } else if (buffer === "−") {
                total = total - numberValue;
            } else if (buffer === "×") {
                total = total * numberValue;
            } else if (buffer === "÷") {
                total = total / numberValue;

            }
        } else {
            buffer = value;
        }
    });

    console.log(total);
    console.log(calculation);
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = "" + total + "";
    calculation = [];
    calculation = [total];
    numberBuffer = "";
}




