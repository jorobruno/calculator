// VARIABLES
const numButtons = document.querySelectorAll(`[data-num]`);
const opButtons = document.querySelectorAll(`[data-op]`);
const eqButton = document.querySelector(`[data-eq]`);
const delButton = document.querySelector(`[data-del]`);
const acButton = document.querySelector(`[data-ac]`);
const line1Element = document.querySelector(`[data-line-1]`);
const line2Element = document.querySelector(`[data-line-2]`);
let operation = ``;

//FUNCIONES
function addNumber(n) {
    if (n == `.` && line2Element.innerText.includes(`.`)) return;
    line2Element.innerText += n;
}


function makeOperation(op) {
    if (line2Element.innerText == ``) return;
    line1Element.innerText = line2Element.innerText + op;
    line2Element.innerText = ``;
    operation = op;

}

function processOperation(op) {
    let ret;
    let n1 = parseFloat(line1Element.innerText);
    let n2 = parseFloat(line2Element.innerText);
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
    line1Element.innerText = ``;
    line2Element.innerText = ret.toString(10);
    operation = ``;
}

function clearScreen() {
    line1Element.innerText = ``;
    line2Element.innerText = ``;
    operation = ``;
}

function deleteNum() {
    line2Element.innerText = line2Element.innerText.slice(0, -1);
}


// ESTRUCTURA
numButtons.forEach(button => button.addEventListener(`click`, () => addNumber(button.innerText)));
opButtons.forEach(button => button.addEventListener(`click`, () => makeOperation(button.innerText)));
eqButton.addEventListener(`click`, () => processOperation(operation));
acButton.addEventListener(`click`, () => clearScreen());
delButton.addEventListener(`click`, () => deleteNum());