function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.body;

const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', changeColor);

function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
};