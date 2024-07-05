function calculate(a, b, operator = '+') {
    let result;

    if (operator === '+') {
        result = a + b;
    } else if (operator === '-') {
        result = a - b;
    } else {
        console.log('Invalid operator, defaulting to addition (+)');
        result = a + b; 
    }

    return result;
}


let value1 = 30;
let value2 = 17;
let operation = '-';

let output = calculate(value1, value2, operation);
console.log( value1+operation+value2+" is "  +output);