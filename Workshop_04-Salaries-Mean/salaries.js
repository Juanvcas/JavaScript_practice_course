const people = [];

function addPerson() {
    const personName = document.getElementById("nameValue");
    const nameError = document.getElementById("nameError");
    const personSalary = document.getElementById("salaryValue");
    const salaryError = document.getElementById("salaryError");

    if (personName.value) {
        if (personSalary.value) {
            people.push({name:personName.value,salary:parseFloat(personSalary.value)});
            addToList(personName,personSalary);
            personName
        } else {
            salaryError.innerText = "* Please, insert a salary";
        }
    } else {
        nameError.innerText = "* Please, insert a name";
    }
}

function addToList(name,salary) {
    const peopleList = document.getElementById("people__list");

    const div = document.createElement("div")
    div.innerHTML = 
    `<p>Name: ${name.value}.</p>
    <p>Salary: ${salary.value}$.</p>`;
    peopleList.appendChild(div);
}

function clearList() {
    const personName = document.getElementById("nameValue");
    const personSalary = document.getElementById("salaryValue");
    const peopleList = document.getElementById("people__list");

    personName.value = "";
    personSalary.value = "";
    peopleList.innerText = "";
    people.splice(0,people.length);
}