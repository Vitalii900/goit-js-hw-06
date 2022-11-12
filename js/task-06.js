const inputRef = document.querySelector('#validation-input');

const dataLength = Number(inputRef.dataset.length);

let counter = 0;

function focusOff() {

    if (counter === dataLength) {

        // console.log('good');
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
        return;
    };

    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
}

function symbolsAmount(event) {
    
    counter = event.currentTarget.value.length;
    // console.log(counter)
};

inputRef.addEventListener('blur', focusOff);

inputRef.addEventListener('input', symbolsAmount);
