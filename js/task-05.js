let inputElement = document.querySelector('#name-input');
let outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', (event) => {
    if (event.target.value === "") {
        outputElement.textContent = 'Anonymous';
    }
    else {
        outputElement.textContent = event.target.value;
    }
});