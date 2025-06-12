// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error (Divide by 0)';
    }
    return number1 / number2;
}

// Helper function to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Update result display
function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}
// Attach event listener
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
// // Attach event listeners
// document.getElementById('add').addEventListener('click', function () {
//     const [num1, num2] = getInputValues();
//     displayResult(add(num1, num2));
// });

document.getElementById('subtract').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value)||0;
    const number2 = parseFloat(document.getElementById('number2').value)||0;
    const result = subtract(number1,number2);
    document.getElementById('calculation-result').textContent=result;
});

document.getElementById('multiply').addEventListener('click', function () {
     const number1 = parseFloat(document.getElementById('number1').value)||0;
     const number2 = parseFloat(document.getElementById(number2).value)||0;
     const result =multiply(number1,number2);
     document.getElementById('calculation-result').textContent=result;
});

document.getElementById('divide').addEventListener('click', function () {
    const number1=parseFloat(document.getElementById('number1').value)||0;
    const number2 = parseFloat(document.getElementById('number2').value)||0;
    const result =divide(number1,number2);
    document.getElementById('calculation-result').textContent=result;
});

