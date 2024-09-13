function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let input = document.getElementById('result').value;
    try {
        let output = eval(input); // Note: eval should be used with caution
        document.getElementById('result').value = output;
    } catch (err) {
        document.getElementById('result').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function del() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}
