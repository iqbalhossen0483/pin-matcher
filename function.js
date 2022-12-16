//generate pin
function getpin() {
    let pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if (pinString.length == 4) {
        return pinString;
    }
    else {
        return getpin();
    }
}

function genaratepin() {
    let display = document.getElementById('genarate-display');
    display.value = getpin();
};

//enter pin
document.getElementById('keyboard').addEventListener('click', function (event) {
    let number = event.target.innerText;
    let display = document.getElementById('calc-display');
    let previousValue = display.value;
    let newValue = previousValue + number;
    if (isNaN(number)) {
        if (number == 'C') {
            display.value = '';
        }
    }
    else {
        display.value = newValue;
    }
});

//check
document.getElementById('submit-btn').addEventListener('click', function () {
    let pin = document.getElementById('genarate-display').value;
    let keyboard = document.getElementById('calc-display');
    let keyboardValue = keyboard.value;
    if (pin == keyboardValue) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    }
    else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
    keyboard.value = '';
})