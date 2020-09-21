function addTogether() {
    var firstInput, secondInput, total;
    firstInput = parseInt(document.getElementById('firstInput').value);
    secondInput = parseInt(document.getElementById('secondInput').value);
    total = firstInput + secondInput;

    document.getElementById("total").innerHTML = "The total is " + total;
}