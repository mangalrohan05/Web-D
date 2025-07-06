/*
Create a faulty calculator using JS.
This does the following:
1. takes two numbers as input from user,
2. performs wrong operations as follows:
    - addition gives subtraction result
    - subtraction gives division result
    - multiplication gives addition result
    - division gives exponential result
3. displays the result in an alert box.
4. performs wrong operations 10% of the time.
*/

let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

let operation = prompt("Enter operation (1 for add, 2 for subtract, 3 for multiply, 4 for divide):");

let result;

if (Math.random() < 0.1) {
    // Perform wrong operation 10% of the time
    switch (operation) {
        case '1': // Addition
            result = a - b; // Wrong: should be subtraction
            break;
        case '2': // Subtraction
            result = a / b; // Wrong: should be division
            break;
        case '3': // Multiplication
            result = parseFloat(a) + parseFloat(b); // Wrong: should be addition
            break;
        case '4': // Division
            result = a**b; // Wrong: should be exponential
            break;
        default:
            alert("Invalid operation");
            result = null;
    }
} else {
    // Perform correct operation
    switch (operation) {
        case '1': // Addition
            result = parseFloat(a) + parseFloat(b);
            break;
        case '2': // Subtraction
            result = parseFloat(a) - parseFloat(b);
            break;
        case '3': // Multiplication
            result = parseFloat(a) * parseFloat(b);
            break;
        case '4': // Division
            if (b == 0) {
                alert("Cannot divide by zero");
                result = null;
            } else {
                result = parseFloat(a) / parseFloat(b);
            }
            break;
        default:
            alert("Invalid operation");
            result = null;
    }
}

if (result !== null) {
    alert("The result is: " + result);
}

