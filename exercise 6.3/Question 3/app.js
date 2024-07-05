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


console.log(calculate(5, 3, '+')); 
console.log(calculate(5, 3, '-')); 
console.log(calculate(5, 3)); 
console.log(calculate(5, 3, '*')); 