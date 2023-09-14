const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById('result');

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener('click', () => {
    const buttonValue = buttonsEl[i].innerText;
    switch (buttonValue) {
      case 'C':
        clearResult();
        break;
      case '=':
        calculateResult();
        break;
      case '⌫':
        clearOneValue();
        break;
      default:
        appendValue(buttonValue);
    }
  });
}
function clearResult() {
  inputFieldEl.value = '';
}
function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
function clearOneValue() {
  const currentValue = inputFieldEl.value;
  inputFieldEl.value = currentValue.slice(0, -1);
}
