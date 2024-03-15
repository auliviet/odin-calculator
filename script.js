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
