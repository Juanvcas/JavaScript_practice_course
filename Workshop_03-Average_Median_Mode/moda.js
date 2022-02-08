const values = [];
// investigar "split()"

function addValues() {
    const inpValues = document.getElementById("values");
    const inpError = document.getElementById("inpError");
    const inpList = document.getElementById("values__list");
    if (inpValues.value) {
        values.push(inpValues.value);
        if (values.length === 1) {
            inpList.innerHTML = 
            `<h3>Here is the value</h3>
            <p>The value is: <b>${values}.</b></p>`;
            inpValues.value = "";
            inpError.innerHTML = "";
        } else {
            inpList.innerHTML = 
            `<h3>Here are the values</h3>
            <p>The values are: <b>${values}.</b></p>`;
            inpValues.value = "";
            inpError.innerHTML = "";
        }
    } else {
        inpError.innerText = "* Plese, insert a valid value.";
    }
}

function clearValues() {
    const inpValues = document.getElementById("values");
    const inpList = document.getElementById("values__list");
    values.slice(0,values.length);
    inpValues.value = "";
    inpList.innerHTML = "";
}

// Mi forma de hacer la moda
function moda() {
    let totalValues = [];
    let iteration = 0;
    for (i of values) {
        const ifRepeat = totalValues.some(function(item){return item.value === i})
        if (!ifRepeat) {
            let quantity = 0;
            for (iv = 0;iv < values.length;iv++) {
                if (values[iv] === i) {
                    totalValues[iteration] = {value:values[iv],amount:quantity + 1};
                    quantity++;
                }
            }
            iteration++;
        }
    }
    return totalValues;
}

function modaResult() {
    const resultOutput = document.getElementById("result__out");
    const resultError = document.getElementById("result__error");
    const modaOutput = document.getElementById("out__moda");
    const otherOutput = document.getElementById("out__others");

    const sortValues = moda().sort(function(a,b){return b.amount - a.amount});
    console.log(sortValues);
    if (sortValues.length >= 1) {
        resultOutput.innerHTML = `<h3>List of Elements</h3>`;
        for (i = 0;i < sortValues.length;i++) {
            if (i === 0) {
                const div = document.createElement("div");
                div.innerHTML = `<p>The <b>Moda</b> element is: <b>${sortValues[i].value}</b>, with <b>${sortValues[i].amount}</b> repeats</p>`;
                resultOutput.appendChild(div);
                resultError.innerText = "";
            } else {
                const div = document.createElement("div");
                div.innerHTML = `<p>The next element is: <b>${sortValues[i].value}</b>, with <b>${sortValues[i].amount}</b> repeats</p>`;
                resultOutput.appendChild(div);
                resultError.innerText = "";
            }
        }
    } else {
        resultError.innerText = "* Sorry, there are no values to calculate.";
    }
}