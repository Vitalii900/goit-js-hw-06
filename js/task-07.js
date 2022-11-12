const inputRangeRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');

function textSizeChange(event) {

    const size = Number(event.currentTarget.value)
    // console.log(Number(event.currentTarget.value));
    textRef.style.fontSize = `${size}px`;

}

inputRangeRef.addEventListener('input', textSizeChange);