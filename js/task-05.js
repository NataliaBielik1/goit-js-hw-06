let input = document.querySelector('input');
let span = document.querySelector('span');
input.addEventListener('input', () => {
    const inputValue = input.value;
    const spanValue = inputValue == '' ? 'Anonymous' : inputValue;
    span.innerHTML = spanValue;
});
