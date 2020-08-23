let displayValue = "";
let operations = [];
let numbersToOperate = []

window.onclick = e => {
    let userInput = e.target.innerText;
    input(userInput);
}

function input(userInput) {
    if(userInput === "0" || userInput === "1" || userInput === "2" || userInput === "3" || userInput === "4" || userInput === "5" || userInput === "6" || userInput === "7" || userInput === "8" || userInput === "9") {
        displayValue += userInput;
        document.getElementById("displaynums").innerHTML = displayValue;
    } else if(userInput === "+" || userInput === "-" || userInput === "x" || userInput === "÷") {
        operations.push(userInput);
        numbersToOperate.push(parseInt(displayValue));
        document.getElementById("displaynums").innerHTML = "";
        displayValue = "";
        console.log(numbersToOperate);
    } else if(userInput === "=") {
        numbersToOperate.push(parseInt(displayValue));
        console.log(numbersToOperate);
        let n0 = numbersToOperate[0];
        for (i = 0; i < operations.length; i++) {
            let numbo = operate(operations[i], n0, numbersToOperate[i + 1]);
            n0 = numbo;
        }
        numbersToOperate.splice(0, numbersToOperate.length);
        operations.splice(0, operations.length);
        document.getElementById("displaynums").innerHTML = n0; 
        displayValue = n0;
    } else if(userInput === "C") {
        numbersToOperate.splice(0, numbersToOperate.length);
        operations.splice(0, operations.length);
        document.getElementById("displaynums").innerHTML = "";
        displayValue = "";
    }
}

add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

function operate(operator, n1, n2) {
    if(operator == "+") {
        return add(n1, n2)
    }
    if(operator == "-") {
        return subtract(n1, n2)
    }
    if(operator == "x") {
        return multiply(n1, n2)
    }
    if(operator == "÷") {
        return divide(n1, n2)
    }
}


