const inputRef = document.querySelector('#name-input');

const nameRef = document.querySelector('#name-output');

const onInputChanger = (event) => {
    console.log(event.currentTarget.placeholder);
    if (event.currentTarget.placeholder === 'Please enter your name') {
        nameRef.textContent = 'Anonymous';
    };
    
    nameRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener('input', onInputChanger);

