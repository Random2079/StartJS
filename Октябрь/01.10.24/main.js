// Объект с людьми
const people = [
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 18 },
    { name: 'Александр', age: 30 },
    { name: 'Екатерина', age: 22 }
];


function RenderList(list){
    const peopleList = document.getElementById('peopleList');

    peopleList.innerHTML = '';

    list.forEach(person => {
        const listItem = document.createElement('ul');
        listItem.textContent = `${person.name}, ${person.age}`;
        peopleList.appendChild(listItem);
    });

    
}

filtBtn = document.getElementById('filterBtn');

filtBtn.addEventListener('click', () => {
    const inputAge = document.getElementById('ageInput').value;
    
    if (inputAge > 150 || inputAge <= 0){
        const error = document.createElement('h2');
        error.textContent = 'Ошибка'

        peopleList.innerHTML = ''
        peopleList.appendChild(error)
        return 0;
    }
    const paramAge = parseInt(inputAge, 10);


    const filterPeople = people.filter(people => people.age > paramAge)

    RenderList(filterPeople);

})

RenderList(people)
