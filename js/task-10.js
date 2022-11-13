function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');

const firstDivBox = document.createElement('div');
firstDivBox.style.backgroundColor = getRandomHexColor();
firstDivBox.style.width = '30';
firstDivBox.style.height = '30';

const addNewDivBoxes = [];

function createBoxes(amount) {
  if (addNewDivBoxes === []) {
    addNewDivBoxes.push(firstDivBox);
  };

  for (let i = 0; i <= amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${firstDivBox.style.width} + 10`;
    newDiv.style.height = `${firstDivBox.style.height} + 10`;
    addNewDivBoxes.push(newDiv);
  };
};

let counter = 0;

function getAmountOfDiv(event) {
  counter = Number(event.currentTarget.value);
  // console.log(counter)
}

const inputRef = document.querySelector('.number');
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');


buttonCreateRef.addEventListener('click', createBoxes(counter));

inputRef.addEventListener('input', getAmountOfDiv);

// Не вийшло в мене зробити це завдання, можливо ви мені покажете рішення щоб я розібрався!!!