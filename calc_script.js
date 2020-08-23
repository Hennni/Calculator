let displayValue = "";
let operations = [];
let numbersToOperate = []
let selected = false

window.onclick = e => {
    let userInput = e.target.innerText;
    input(userInput);
}

function input(userInput) {
    if(userInput === "0" || userInput === "1" || userInput === "2" || userInput === "3" || userInput === "4" || userInput === "5" || userInput === "6" || userInput === "7" || userInput === "8" || userInput === "9") {
        if(selected === true) {
            document.getElementById("displaynums").innerHTML = "";
            displayValue = "";
            selected = false;
        }
        displayValue += userInput;
        document.getElementById("displaynums").innerHTML = displayValue;
    } else if(userInput === "+" || userInput === "-" || userInput === "x" || userInput === "÷") {
        if(selected === true) {
            selected = true;
        } else if(operations.length === 1) {
            numbersToOperate.push(parseInt(displayValue));
            selected = true;
            displayValue = operate(operations[0], numbersToOperate[0], numbersToOperate[1]);
            operations.splice(0, operations.length);
            numbersToOperate.splice(0, numbersToOperate.length);
            operations.push(userInput);
            numbersToOperate.push(displayValue);
            document.getElementById("displaynums").innerHTML = displayValue;
            selected = true;
        } else {
            selected = true;
            operations.push(userInput);
            numbersToOperate.push(parseInt(displayValue));
            displayValue = ""
        }
    } else if(userInput === "=") {
        if(numbersToOperate.length > 0) {
            numbersToOperate.push(parseInt(displayValue));
            let n0 = numbersToOperate[0];
            for (i = 0; i < operations.length; i++) {
                let numbo = operate(operations[i], n0, numbersToOperate[i + 1]);
                n0 = numbo;
            }
            numbersToOperate.splice(0, numbersToOperate.length);
            operations.splice(0, operations.length);
            document.getElementById("displaynums").innerHTML = n0; 
            displayValue = n0;
        }
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


