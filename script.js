function calculate() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var operation = document.getElementById('operator').value;

    var sum = input1 + input2;
    var difference = input1 - input2;
    var product = input1 * input2;
    var quotient = input1 / input2;

    switch (operation) {
        case 'add':
            document.getElementById('answer').innerHTML = sum;
            break
        case 'subtract':
            document.getElementById('answer').innerHTML = difference;
            break
        case 'multiply':
            document.getElementById('answer').innerHTML = product;
            break
        case 'divide':
            document.getElementById('answer').innerHTML = quotient;
            break
        default:
            document.getElementById('answer').innerHTML = 'Please select an operation.'
    }
}
