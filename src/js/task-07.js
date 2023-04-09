const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  text.style['font-size'] = `${event.currentTarget.value}px`;
});
