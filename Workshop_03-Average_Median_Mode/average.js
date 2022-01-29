// Mi forma de hacer el promedio.
const values = [];

function addValues() {
    const inputValue = document.getElementById("values");
    const valuesList = document.getElementById("formV__values");
    values.push(parseFloat(inputValue.value));
    valuesList.innerHTML = 
    `
    <h3>list of values:</h3>
    <p>The values are: <b>${values}</b></p>
    `;
    inputValue.value = "";
}

function cleanValues() {
    const inputValue = document.getElementById("values");
    const valuesList = document.getElementById("formV__values");
    const resultSect = document.getElementById("result");
    values.splice(0,values.length);
    inputValue.value = "";
    valuesList.innerText = "";
}

function average() {
    const resultSect = document.getElementById("result");
    let sumValues = 0;
    for (i of values) {
        sumValues = sumValues + i;
    }
    const average = sumValues / values.length;
    resultSect.innerHTML = 
    `
    <h3>Here is your result:</h3>
    <p>The average is: <b>${average.toFixed(2)}</b></p>
    `;
}