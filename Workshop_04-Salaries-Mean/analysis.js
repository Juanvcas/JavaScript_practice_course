function salaryMedian() {
    const resultSect = document.getElementById("result__out");
    const resultError = document.getElementById("result__error");

    const orderSalary = people.sort(
        function(a,b){return a.salary - b.salary}
    );
    
    if (orderSalary[0]) {
        if (orderSalary.length % 2) {
            const index = (orderSalary.length / 2) - 0.5;
            const median = orderSalary[index].salary;
            resultSect.innerHTML = 
            `
            <h3>Here is your result:</h3>
            <p>The median is: <b>${median.toFixed(2)}</b></p>
            `;
            
        } else {
            const index = orderSalary.length / 2;
            const median = (orderSalary[index].salary + (orderSalary[index - 1].salary)) / 2;
            resultSect.innerHTML = 
            `
            <h3>Here is your result:</h3>
            <p>The median is: <b>${median.toFixed(2)}</b></p>
            `;
        }
    } else {
        resultError.innerText = "* There are no salaries to calculate."
    }
}

function topSalary() {
    const resultSect = document.getElementById("result__out2");
    const resultError = document.getElementById("result__error");

    const orderSalary = people.sort(
        function(a,b){return a.salary - b.salary}
    );
    const topSalary = orderSalary.slice((orderSalary.length * 0.9),orderSalary.length);
    if (topSalary[0]) {
        if (topSalary.length % 2) {
            const index = (topSalary.length / 2) - 0.5;
            const median = topSalary[index].salary;
            resultSect.innerHTML = 
            `
            <h3>Here is the top 10% salaries:</h3>
            <p>The top 10% median is: <b>${median.toFixed(2)}</b></p>
            `;
            
        } else {
            const index = topSalary.length / 2;
            const median = (topSalary[index].salary + (topSalary[index - 1].salary)) / 2;
            resultSect.innerHTML = 
            `
            <h3>Here is the top 10% salaries:</h3>
            <p>The top 10% median is: <b>${median.toFixed(2)}</b></p>
            `;
        }
    } else {
        resultError.innerText = "* There are no salaries to calculate."
    }
}