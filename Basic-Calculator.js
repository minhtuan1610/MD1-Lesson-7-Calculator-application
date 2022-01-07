function basicCalculator(symbol) {
    let inputNumber1 = document.getElementById("number1").value;
    let inputNumber2 = document.getElementById("number2").value;
    let Number1 = Number(inputNumber1);
    let Number2 = Number(inputNumber2);
    let result;
    switch (symbol) {
        case "+":
            result = Number1 + Number2;
            symbol = "addition";
            break;
        case "-":
            result = Number1 - Number2;
            symbol = "subtraction";
            break;
        case "*":
            result = Number1 * Number2;
            symbol = "multiplication";
            break;
        case "/":
            result = Number1 / Number2;
            symbol = "division";
            break;

    }
    document.getElementById("Result").innerText = "Result " + symbol + ": " + result;
}