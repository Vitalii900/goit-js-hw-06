// 1

const categoriesRef = document.querySelector('#categories');

const categoriesAmount = categoriesRef.querySelectorAll('li.item').length;
console.log(`Number of categories: ${categoriesAmount}`);

// 2

const categoryAndElements = () => {
    const itemRef = categoriesRef.querySelectorAll('li.item').forEach(elem => {
        console.log(`Category: ${elem.querySelector('h2').textContent}`);
        console.log(`Elements: ${elem.querySelectorAll('li').length}`);
    });
};

console.log(categoryAndElements());

// Не розумію як від undefined в консолі позбавитись...