function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');

const inputEl = document.querySelector('input');

let divDimension = 30;

let addNewDivBoxes = [];

function createBoxes() {
  // console.log(Number(inputEl.value))
  if (Number(inputEl.value) === 0) {
    return;
  };

  const firstDivBox = document.createElement('div');
  firstDivBox.style.backgroundColor = getRandomHexColor();
  firstDivBox.style.width = divDimension + 'px';
  firstDivBox.style.height = divDimension + 'px';
  firstDivBox.classList.add('delete');

  addNewDivBoxes.push(firstDivBox);


  for (let i = 1; i < Number(inputEl.value); i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = (divDimension + 10 * i) + 'px';
    newDiv.style.height = (divDimension + 10 * i) + 'px';
    newDiv.classList.add('delete');
    addNewDivBoxes.push(newDiv);
  };

  boxesRef.append(...addNewDivBoxes);
};

function clearAll() {
  addNewDivBoxes = [];
  for (let i = 1; i <= Number(inputEl.value); i += 1) {
    const newDivBoxesToRemove = document.querySelector('.delete');
    newDivBoxesToRemove.remove();
    location.reload();
  };
  
};

const inputRef = document.querySelector('.number');
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');


buttonCreateRef.addEventListener('click', createBoxes);

buttonDestroyRef.addEventListener('click', clearAll);

