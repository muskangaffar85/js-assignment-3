function performOperation(operand1, operand2, operator) {
    if (operator === '+') {
        // Perform addition
        console.log(`${operand1} + ${operand2} = ${operand1 + operand2}`);
    } else if (operator === '-') {
        // Perform subtraction
        console.log(`${operand1} - ${operand2} = ${operand1 - operand2}`);
    } else {
        console.error('Unsupported operator');
        return;
    }

    
    let updatedOperator = (operator === '+') ? '-' : '+';

   
    performOperation(operand1, operand2, updatedOperator);
}


performOperation(5, 3, '+');
