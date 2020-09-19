// VARIABLES
const numButtons = document.querySelectorAll(`[data-num]`);
const opButtons = document.querySelectorAll(`[data-op]`);
const eqButton = document.querySelector(`[data-eq]`);
const delButton = document.querySelector(`[data-del]`);
const acButton = document.querySelector(`[data-ac]`);
const line1Element = document.querySelector(`[data-line-1]`);
const line2Element = document.querySelector(`[data-line-2]`);
let operation;
let n1 = 0;
let n2 = 0;

//FUNCIONES
function addNumber(n) {
    if (n == `.` && line2Element.innerText.includes(`.`)) return;
    line2Element.innerText += n;
}


function makeOperation(op) {
    //Operaciones solas no funcionan
    if (line2Element.innerText == ``) return;
    //Realizar operaciones 
    if (line1Element.innerText == ``) {
        n1 = parseFloat(line2Element.innerText);
        line1Element.innerText = n1.toString(10) + op;
        line2Element.innerText = ``;
        operation = op;
    }
    if (line1Element.innerText != `` && line2Element.innerText != ``) {
        n1 = parseFloat(line1Element.innerText);
        n2 = parseFloat(line2Element.innerText);
        let ret = processOperation(operation);
        line1Element.innerText = ret.toString(10) + op;
        line2Element.innerText = ``;
        operation = op;
    }
}

function processOperation(op) {
    let ret = 0;
    n1 = parseFloat(line1Element.innerText);
    n2 = parseFloat(line2Element.innerText);
    if (isNaN(n1) || isNaN(n2)) return;
    switch (op) {
        case `+`:
            ret = n1 + n2;
            break;
        case `-`:
            ret = n1 - n2;
            break;
        case `*`:
            ret = n1 * n2;
            break;
        case `/`:
            ret = n1 / n2;
            break;
        default:
            return;
    }
    operation = ``;
    return ret;
}

function clearScreen() {
    line1Element.innerText = ``;
    line2Element.innerText = ``;
    operation = ``;
}

function deleteNum() {
    line2Element.innerText = line2Element.innerText.slice(0, -1);
}

function displayResult(result) {
    clearScreen();
    line2Element.innerText = result.toString(10);
}


// ESTRUCTURA
numButtons.forEach(button => button.addEventListener(`click`, () => addNumber(button.innerText)));
opButtons.forEach(button => button.addEventListener(`click`, () => makeOperation(button.innerText)));
eqButton.addEventListener(`click`, () => displayResult(processOperation(operation)));
acButton.addEventListener(`click`, () => clearScreen());
delButton.addEventListener(`click`, () => deleteNum());