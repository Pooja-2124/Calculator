
let lastCharacterWasOperator = false;

function appendValue(value) {
    const display = document.querySelector('input[name="display"]');

    if (isOperator(value)) {
        if (lastCharacterWasOperator) {
            // Replace the last operator if an operator is clicked again
            display.value = display.value.slice(0, -1) + value;
        } else {
            display.value += value
        }
        lastCharacterWasOperator = true;
    } else {
        display.value += value
        lastCharacterWasOperator = false;
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function calculateResult() {
    const display = document.querySelector('input[name="display"]');
    try {
        display.value = eval(display.value)
    } catch {
        display.value = "Error"
    }
}
