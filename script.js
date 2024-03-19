// 
// Project variables
// 
let currentNumber = "";
let previousNumber = "";
let operator = "";
let total = "";

// 
// Functions
//

function add(num1, num2) {
// Basic sum function

    return num1 + num2;
}


function substract(num1, num2) {
// Basic substraction function

    return num1 - num2;
}

function multiply (num1, num2) {
// Basic multiplication function

    return num1 * num2;
}


function divide(dividend, divisor) {
// Basic division function

    return dividend / divisor;
}


function operate(operator, num1, num2) {
// Function to define which operation to execute

    switch (operator) {
        case '+':
            return add(num1, num2);
        
        case '-':
            return substract(num1, num2);

        case '*':
            return multiply(num1, num2);
        
        case '/':
            return divide(num1, num2);
        
        default:
            return ERROR;
    }
}

function recordNumber(input) {
// Function to save numbers entered by the user in a variable 

    currentNumber = currentNumber + input;
};

function recordOperator(input) {
// Function to save the operator entered by the user in a variable

    operator = input;
}

function getInput(event) {
// Function to record the eventListeners and store them in a correct variable

    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let operations = ["+", "-", "*", "/"];
    let equal = ["="];
    let clear = ["clear"];
    let input = event.target.value;

    if (numbers.includes(input)) {

        // Record all the digits entered by the user to a single number
        recordNumber(input);
    } 
    else if (operations.includes(input)) {
        if (previousNumber == "") {

            // Move the recorded number into the previousNumber variable so it can be used later to operate
            previousNumber = currentNumber;
            currentNumber = "";
            recordOperator(input);
        }
        else {

            // Calculate the total of the two stored numbers and move them to the previousNumber variable to free up space to record currentNumber
            total = operate(operator, +previousNumber, +currentNumber);
            previousNumber = total;
            currentNumber = "";
            recordOperator(input);
        }
    }
    else if (equal.includes(input)) {

        if (currentNumber != "" && previousNumber != "" && operator != "") {
            total = operate(operator, +previousNumber, +currentNumber);
            previousNumber = total;
            currentNumber = "";
        }
    }
    else if (clear.includes(input)) {
        previousNumber = "";
        currentNumber = "";
        operator = "";
        total = "";
    }

    // Debugging
    console.log(`Current number = ${currentNumber}`);
    console.log(`Previous number = ${previousNumber}`);
    console.log(`Operator = ${operator}`);
    console.log(`total = ${total}`);

}


// 
// Event listeners
// 
buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        getInput(event);
    }); 
});

