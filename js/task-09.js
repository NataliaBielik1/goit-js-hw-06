function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", handlerButton);

const spanColor = document.querySelector(".color");

function handlerButton() {
  const resultColor = getRandomHexColor();

  spanColor.textContent = resultColor;

  document.body.style.backgroundColor = resultColor;
}