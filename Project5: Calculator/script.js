let input = ''
let lastevent = 0
function press(value) {
    if (lastevent == 1) {
        lastevent = 0
        document.getElementById('display').innerText = ''
        input = ''
    }
    input += value

    let displayText = input.replace(/\*\*/g, '^').replace(/\//g, '÷').replace(/\*/g, '×');

    document.getElementById('display').innerText = displayText
}
function remove() {
    if (lastevent == 1) {
        lastevent = 0;
        input = ''
        document.getElementById('display').innerText = '0'
    }
    if (input.endsWith('**')) {
        input = input.slice(0, -2);
    } else {
        input = input.slice(0, -1);
    }
    let displayText = input.replace(/\*\*/g, '^');

    if (displayText != '')
        document.getElementById('display').innerText = displayText
    else
        document.getElementById('display').innerText = '0'
}
function calculate() {
    try {
        if (input.includes('/')) {
            let result = eval(input);
            result = parseFloat(result.toFixed(10)); // Fix to 10 decimals, remove unnecessary zeroes
            input = result.toString();
        }
        else
            input = eval(input).toString();
        lastevent = 1;
    } catch {
        input = 'Error';
    }
    document.getElementById('display').innerText = input
}
function clearDisplay() {
    input = '';
    document.getElementById('display').innerText = '0'
}