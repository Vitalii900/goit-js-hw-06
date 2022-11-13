function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');

const inputEl = document.querySelector('input');

const firstDivBox = document.createElement('div');
firstDivBox.style.backgroundColor = getRandomHexColor();
firstDivBox.style.width = '30px';
firstDivBox.style.height = '30px';

const addNewDivBoxes = [];

function createBoxes() {
  // console.log(Number(inputEl.value))
  if (addNewDivBoxes === []) {
    addNewDivBoxes.push(firstDivBox);
  };

  for (let i = 0; i <= Number(inputEl.value); i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${firstDivBox.style.width} + 10 * ${[i]}`;
    newDiv.style.height = `${firstDivBox.style.height} + 10 * ${[i]}`;
    addNewDivBoxes.push(newDiv);
  };
};

const inputRef = document.querySelector('.number');
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');


buttonCreateRef.addEventListener('click', createBoxes);

boxesRef.append(...addNewDivBoxes);

// Не вийшло в мене зробити це завдання, можливо ви мені покажете рішення щоб я розібрався!!!