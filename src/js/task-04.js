let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value')

decrementButton.addEventListener('click', () => { 
    counterValue = counterValue - 1;
    render();
});

incrementButton.addEventListener('click', () => { 
    counterValue = counterValue + 1;
    render();
});

function render() {
    valueSpan.innerHTML = counterValue;
}

