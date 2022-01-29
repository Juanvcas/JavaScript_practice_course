// Mi forma de hacer la media
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

function median() {
    const resultSect = document.getElementById("result");
    let orderValues = values;
    for (i of orderValues) {
        for (i = 0; i < orderValues.length; i++) {
            if (orderValues[i] > orderValues[i + 1]) {
                const v = orderValues[i];
                orderValues[i] = orderValues[i + 1];
                orderValues[i + 1] = v;
            }
        }
    }
    if (orderValues.length % 2) {
        const index = (orderValues.length / 2) - 0.5;
        const median = orderValues[index];
        resultSect.innerHTML = 
        `
        <h3>Here is your result:</h3>
        <p>The median is: <b>${median.toFixed(2)}</b></p>
        `;
        
    } else {
        const index = orderValues.length / 2;
        const median = (orderValues[index] + (orderValues[index - 1])) / 2;
        resultSect.innerHTML = 
        `
        <h3>Here is your result:</h3>
        <p>The median is: <b>${median.toFixed(2)}</b></p>
        `;
    }
}