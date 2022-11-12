const inputRef = document.querySelector('#name-input');

const nameRef = document.querySelector('#name-output');

const onInputChanger = (event) => {
    // console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === 0) {
        nameRef.textContent = "Anonymous";
        return;
    };
    
    nameRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener('input', onInputChanger);
