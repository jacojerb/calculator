//math functions

function sum(a,b) {
    a = Number(a);
    b = Number(b);
    return a + b
}

function subtract(a,b) {
    a = Number(a);
    b = Number(b);
    return b - a
}

function divide(a,b) {
    a = Number(a);
    b = Number(b);
    return b / a
}

function multiply(a,b) {
    a = Number(a);
    b = Number(b);
    return a * b
}




//calculations

function calculate(a,b,equasion) {
    let result;
    switch(equasion) {
        case "sum": result = sum(a,b); break
        case "subtract": result = subtract(a,b); break;
        case "divide": result = divide(a,b); break;
        case "multiply": result = multiply(a,b); break;
    }   
     if (result === NaN || result === Infinity) {printError(); 
        savedNumber = null;
        currentNumber = "";
        selector = null;
        dotPosition = "noDot"; 
        return }
    if (result.toString().length > 12) {
        if (result.toString().includes(".")) {
            let resultString = result.toString();
            if (resultString.indexOf(".") > 12) {return result}
            else {
                resultString = resultString.slice(0, 13); 
                result = Number(resultString);
                return result;
            } 
        } else {return result}
    } else {return result}
}


let savedNumber = 0
let currentNumber = ""
let selector = "multiply"
let dotPosition = "noDot"


let equasionButtonPress = function(operator) {
    if (currentNumber === "-") {return}
    if (currentNumber === "") {
        if (savedNumber) {
            selector = operator
        } 
    } else {
        if (savedNumber) { 
            let result = calculate(currentNumber, savedNumber, selector);
            if (result === undefined) {
                printError(); return
            }
            printNumber(result.toString());
            savedNumber = result;
            currentNumber = "";
            selector = operator;
        } else {
            console.log(currentNumber)
            savedNumber = currentNumber;
            currentNumber = "";
            selector = operator;
        }
    }
}





//display

//print digit

const digit1 = document.querySelector(".one")
const digit2 = document.querySelector(".two")
const digit3 = document.querySelector(".three")
const digit4 = document.querySelector(".four")
const digit5 = document.querySelector(".five")
const digit6 = document.querySelector(".six")
const digit7 = document.querySelector(".seven")
const digit8 = document.querySelector(".eight")
const digit9 = document.querySelector(".nine")
const digit10 = document.querySelector(".ten")
const digit11 = document.querySelector(".eleven")
const digit12 = document.querySelector(".twelve")
const dot1 = document.querySelector(".dot1dot")
const dot2 = document.querySelector(".dot2dot")
const dot3 = document.querySelector(".dot3dot")
const dot4 = document.querySelector(".dot4dot")
const dot5 = document.querySelector(".dot5dot")
const dot6 = document.querySelector(".dot6dot")
const dot7 = document.querySelector(".dot7dot")
const dot8 = document.querySelector(".dot8dot")
const dot9 = document.querySelector(".dot9dot")
const dot10 = document.querySelector(".dot10dot")
const dot11 = document.querySelector(".dot11dot")
const dot12 = document.querySelector(".dot12dot")

function writeOne(digitNumber) {
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
}

function writeTwo(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayE").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"   
}

function writeThree(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeFour(digitNumber) {
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayF").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeFive(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayF").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeSix(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayE").style.backgroundColor = "black"
    digitNumber.querySelector(".displayF").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeSeven(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
}

function writeEight(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayE").style.backgroundColor = "black"
    digitNumber.querySelector(".displayF").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeNine(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayF").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeZero(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayB").style.backgroundColor = "black"
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayE").style.backgroundColor = "black"
    digitNumber.querySelector(".displayF").style.backgroundColor = "black"
}

function writeMinus(digitNumber) {
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeE(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayE").style.backgroundColor = "black"
    digitNumber.querySelector(".displayF").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeR(digitNumber) {
    digitNumber.querySelector(".displayE").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function writeO(digitNumber) {
    digitNumber.querySelector(".displayC").style.backgroundColor = "black"
    digitNumber.querySelector(".displayD").style.backgroundColor = "black"
    digitNumber.querySelector(".displayE").style.backgroundColor = "black"
    digitNumber.querySelector(".displayG").style.backgroundColor = "black"
}

function clear(digitNumber) {
    digitNumber.querySelector(".displayA").style.backgroundColor = "initial"
    digitNumber.querySelector(".displayB").style.backgroundColor = "initial"
    digitNumber.querySelector(".displayC").style.backgroundColor = "initial"
    digitNumber.querySelector(".displayD").style.backgroundColor = "initial"
    digitNumber.querySelector(".displayE").style.backgroundColor = "initial"
    digitNumber.querySelector(".displayF").style.backgroundColor = "initial"
    digitNumber.querySelector(".displayG").style.backgroundColor = "initial"
}

function clearAll() {
    let whereToPrint = ""
    for (let n = 1; n <= 12; n++) {
        switch(n) {
            case 1: whereToPrint = digit1; break
            case 2: whereToPrint = digit2; break
            case 3: whereToPrint = digit3; break
            case 4: whereToPrint = digit4; break
            case 5: whereToPrint = digit5; break
            case 6: whereToPrint = digit6; break
            case 7: whereToPrint = digit7; break
            case 8: whereToPrint = digit8; break
            case 9: whereToPrint = digit9; break
            case 10: whereToPrint = digit10; break
            case 11: whereToPrint = digit11; break
            case 12: whereToPrint = digit12; break
    } clear(whereToPrint)  ;
    switch(n) {
        case 12: dot1.style.backgroundColor = "initial"; break
        case 1: dot2.style.backgroundColor = "initial"; break
        case 2: dot3.style.backgroundColor = "initial"; break
        case 3: dot4.style.backgroundColor = "initial"; break
        case 4: dot5.style.backgroundColor = "initial"; break
        case 5: dot6.style.backgroundColor = "initial"; break
        case 6: dot7.style.backgroundColor = "initial"; break
        case 7: dot8.style.backgroundColor = "initial"; break
        case 8: dot9.style.backgroundColor = "initial"; break
        case 9: dot10.style.backgroundColor = "initial"; break
        case 10: dot11.style.backgroundColor = "initial"; break
        case 11: dot12.style.backgroundColor = "initial"; break
    }
} dotPosition = "noDot" }

//print whole number:

function printNumber(num) {
    clearAll()
    let digitToPrint = ""
    let numberToPrint = num
    console.log(numberToPrint)
    if (numberToPrint.includes(".")) {
        console.log(numberToPrint.indexOf("."))
        dotPosition = numberToPrint.length - numberToPrint.indexOf(".") -1;
        numberToPrint = numberToPrint.replace(".", "")
     } 
    if (numberToPrint.length > 12) {
        printError();
        return
    } printDot();
    for (let n = 1; n <= numberToPrint.length; n++) {
        if (n === 1) {
            digitToPrint = numberToPrint.slice(-1)   
                    
        } else {
            digitToPrint = numberToPrint.slice(-n,-n + 1)
        } switch(n) {
            case 1: whereToPrint = digit1; break
            case 2: whereToPrint = digit2; break
            case 3: whereToPrint = digit3; break
            case 4: whereToPrint = digit4; break
            case 5: whereToPrint = digit5; break
            case 6: whereToPrint = digit6; break
            case 7: whereToPrint = digit7; break
            case 8: whereToPrint = digit8; break
            case 9: whereToPrint = digit9; break
            case 10: whereToPrint = digit10; break
            case 11: whereToPrint = digit11; break
            case 12: whereToPrint = digit12; break
            
        } 
        switch (digitToPrint) {
            case "1": writeOne(whereToPrint); break
            case "2": writeTwo(whereToPrint); break
            case "3": writeThree(whereToPrint); break
            case "4": writeFour(whereToPrint); break
            case "5": writeFive(whereToPrint); break
            case "6": writeSix(whereToPrint); break
            case "7": writeSeven(whereToPrint); break
            case "8": writeEight(whereToPrint); break
            case "9": writeNine(whereToPrint); break
            case "0": writeZero(whereToPrint); break
            case "-": writeMinus(whereToPrint); break
        }   
           
        } 
    }


function printError() {
    clearAll();
    writeR(digit1)
    writeO(digit2)
    writeR(digit3)
    writeR(digit4)
    writeE(digit5)
}

function printDot() {
    switch(dotPosition) {
        case "noDot": break;
        case 0: dot1.style.backgroundColor = "black"; break
        case 1: dot2.style.backgroundColor = "black"; break
        case 2: dot3.style.backgroundColor = "black"; break
        case 3: dot4.style.backgroundColor = "black"; break
        case 4: dot5.style.backgroundColor = "black"; break
        case 5: dot6.style.backgroundColor = "black"; break
        case 6: dot7.style.backgroundColor = "black"; break
        case 7: dot8.style.backgroundColor = "black"; break
        case 8: dot9.style.backgroundColor = "black"; break
        case 9: dot10.style.backgroundColor = "black"; break
        case 10: dot11.style.backgroundColor = "black"; break
        case 11: dot12.style.backgroundColor = "black"; break
    }
}


//Display test:
//writeOne(digit1)
//writeTwo(digit2)
//writeThree(digit3)
//writeFour(digit4)
//writeFive(digit5)
//writeSix(digit6)
//writeSeven(digit7)
//writeEight(digit8)
//writeNine(digit9)
//writeZero(digit10)
//writeEight(digit11)
//writeEight(digit12)



//buttons

const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const button5 = document.querySelector(".button5")
const button6 = document.querySelector(".button6")
const button7 = document.querySelector(".button7")
const button8 = document.querySelector(".button8")
const button9 = document.querySelector(".button9")
const button0 = document.querySelector(".button0")
const buttonDot = document.querySelector(".buttonDot")
const buttonBackspace = document.querySelector(".buttonBackspace")
const buttonClear = document.querySelector(".buttonClear")
const buttonPlus = document.querySelector(".buttonPlus")
const buttonMinus = document.querySelector(".buttonMinus")
const buttonMultiply = document.querySelector(".buttonTimes")
const buttonDivide = document.querySelector(".buttonDivide")
const buttonEquals = document.querySelector(".buttonEquals")

button1.addEventListener("click", function() {
    currentNumber += "1";
    printNumber(currentNumber)
})
button2.addEventListener("click", function() {
    currentNumber += "2";
    printNumber(currentNumber)
})
button3.addEventListener("click", function() {
    currentNumber += "3";
    printNumber(currentNumber)
})
button4.addEventListener("click", function() {
    currentNumber += "4";
    printNumber(currentNumber)
})
button5.addEventListener("click", function() {
    currentNumber += "5";
    printNumber(currentNumber)
})
button6.addEventListener("click", function() {
    currentNumber += "6";
    printNumber(currentNumber)
})
button7.addEventListener("click", function() {
    currentNumber += "7";
    printNumber(currentNumber)
})
button8.addEventListener("click", function() {
    currentNumber += "8";
    printNumber(currentNumber)
})
button9.addEventListener("click", function() {
    currentNumber += "9";
    printNumber(currentNumber)
})
button0.addEventListener("click", function() {
    currentNumber += "0";
    printNumber(currentNumber)
})

buttonDot.addEventListener("click", function() {
    if (dotPosition === "noDot") {
        currentNumber += "."
    } printNumber(currentNumber)
})

buttonBackspace.addEventListener("click", function () {
    if (currentNumber) {
        currentNumber = currentNumber.slice(0, currentNumber.length - 1)
        printNumber(currentNumber)
    }
})

buttonClear.addEventListener("click", function() {
    clearAll();
    savedNumber = null
    currentNumber = ""
    dotPosition = "noDot"
})

buttonPlus.addEventListener("click", function() {equasionButtonPress("sum")})

buttonMinus.addEventListener("click", function() {equasionButtonPress("subtract") } )


buttonMultiply.addEventListener("click", function() {equasionButtonPress("multiply")})

buttonDivide.addEventListener("click", function() {equasionButtonPress("divide")})

buttonEquals.addEventListener("click", function() {equasionButtonPress(selector)})
