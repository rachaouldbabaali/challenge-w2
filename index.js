
// get Elements from the DOM

let temp = document.getElementById('temp');
let button = document.getElementById('convert');
let result = document.getElementById('result');


function convert() {
    let celsius = temp.value;
    let fahrenheit = (celsius * 9/5) + 32;
    result.innerHTML = fahrenheit;
}

button.addEventListener('click', convert);


