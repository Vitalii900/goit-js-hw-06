const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map((elem) => {
  const liElemRef = document.createElement('li');

  liElemRef.classList.add('item');
  liElemRef.textContent = elem;

  return liElemRef;
})


ingredientsRef.append(...elements);