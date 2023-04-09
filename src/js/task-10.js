function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsBoxRef = document.querySelector("#controls");

const inputEl = controlsBoxRef.querySelector("input");

const buttonCreate = controlsBoxRef.querySelector("[data-create]");
const buttonDestroy = controlsBoxRef.querySelector("[data-destroy]");

buttonCreate.addEventListener("click", handleCreateBox);
buttonDestroy.addEventListener("click", handleDestroy);

const containerBoxes = document.querySelector("div#boxes");

function handleCreateBox() {
  const amount = inputEl.value;

  if (amount <= 1 || amount >= 100) {
    alert(`Введіть коректне значення (1-100)`);
    return;
  }

  if (containerBoxes.children.length) {
    alert(`Спочатку видаліть намальовані елементи`);
    return;
  }
  createBoxes(amount);
  inputEl.value = "";
}

function createBoxes(amount) {
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    const colorBox = getRandomHexColor();

    const markupDivEl = `<div style="width:${30 + i * 10}px; height:${
      30 + i * 10
    }px; background-color:${colorBox}"></div>`;

    markup += markupDivEl;
  }
  containerBoxes.innerHTML = markup;
}

function handleDestroy() {
  if (!containerBoxes.children.length) {
    alert(`Спочатку створіть елементи`);
    return;
  }
  destroyBoxes();
}

function destroyBoxes() {
  containerBoxes.innerHTML = "";
}