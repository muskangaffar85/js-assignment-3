let operator = '+ or -'

let a = 5;
let b = 3;
let result;

if (operator === '+') {
    result = a + b;
} else if (operator === '-') {
    result = a - b;
} else {
    console.log('Invalid operator');
}

console.log(result);

