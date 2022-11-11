const counter = {
    value: 0,

    plusValue() {
        this.value += 1;
    },

    minusValue() {
        this.value -= 1;
    },
};

const counterValue = document.querySelector('#value');

const decrementButtonRef = document.querySelector('[data-action="decrement"]');

const incrementButtonRef = document.querySelector('[data-action="increment"]');

const plus = () => {

    counter.plusValue();

    counterValue.textContent = counter.value;
};

const minus = () => {

    counter.minusValue();

    counterValue.textContent = counter.value;
};

decrementButtonRef.addEventListener('click', minus);

incrementButtonRef.addEventListener('click', plus);