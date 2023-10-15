let counterValue = 0;

let decrementButton = document.querySelector('[data-action="decrement"]');
let incrementButton = document.querySelector('[data-action="increment"]');
let counterHTML = document.querySelector('#value');
decrementButton.addEventListener("click", () => {
    counterValue--;
    counterHTML.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
    counterValue++;
    counterHTML.textContent = counterValue;
});