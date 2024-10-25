function sayName() {
    console.log(this.name);
}

const person1 = { name: "Аня" };
const person2 = { name: "Виктор" };

// Вызови функцию для person1 и person2 с помощью call

sayName.call(person1)
sayName.call(person2)

function sum(a, b, c) {
    console.log(a + b + c);
}

const numbers2 = [3, 5, 7];

// Вызови функцию sum с помощью apply, передав массив numbers

sum.apply(null,numbers2);

const person4 = {
    age: 20,

    showAge: function() {
        console.log(this.age);
    }
};

// Создай новую функцию, которая всегда выводит возраст этого человека

const ageOut = person4.showAge.bind(person4)

ageOut()

const greeting = "Привет";
const personName = "Катя";

function greet() {
    console.log(`${greeting}, ${personName}`);
}

greet.call(greeting,personName)

// Вызови функцию greet, используя call, передав greeting и personName


const animal = {
    sound: function() {
        console.log(this.voice);
    }
};

const cat = { voice: "Мяу" };

// Используй animal.sound для объекта cat

animal.sound.call(cat)


const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

// Создай новый массив, содержащий элементы из arr1 и arr2

console.log([...arr3, ...arr4])

const person = {
    name: "Алекс",
    city: "Москва"
};

// Создай новый объект, добавив к нему поле age: 25

const updatedPerson = {...person, age: 25}

console.log({...person, age: 25})


const sumNumbers = (...elements) => {
    console.log(elements.reduce((acumulator, currentValue) => acumulator + currentValue,0)) 
}

sumNumbers(1, 2, 3); // 6
sumNumbers(5, 10, 15, 20); // 50

// { name: "Олег", subjects: ["Математика", "Физика", "Химия"] }

function studentInfo(name, ...subjects){
    return {name, subjects}
}

console.log(studentInfo("Олег", "Математика", "Физика", "Химия"));


const userInfo = { name: "Иван", age: 28 };
const userContact = { email: "ivan@mail.com", phone: "123456789" };

// Создай новый объект, объединив userInfo и userContact
/*
{
  name: "Иван",
  age: 28,
  email: "ivan@mail.com",
  phone: "123456789"
}
*/

console.log({...userInfo, ...userContact});

const names = ["Катя", "Олег", "Анна", "Маша"];

// Напиши функцию findNameIndex(name), которая возвращает индекс имени в массиве

findNameIndex("Олег"); // 1
findNameIndex("Иван"); // -1

function findNameIndex(name){
    console.log(names.indexOf(name))
}


// Напиши функцию containsNumber(num), которая возвращает true, если число есть в массиве

function containsNumber(number) {
    return numbers4.indexOf(number) !== -1;
}

const numbers4 = [10, 20, 30, 40, 50];

console.log(containsNumber(30)); // true
console.log(containsNumber(60)); // false


const numbers5 = [];
// Добавь элементы с помощью push()
numbers5.push(10,20,30)

console.log(numbers5); // Ожидаемый результат: [10, 20, 30]

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

// // Используй push() для добавления элементов arr2 в arr1

arr1.push(...arr2)

console.log(arr1); // Ожидаемый результат: [1, 2, 3, 4, 5]

const numbers11 = [];
// Добавь элементы за один вызов
numbers11.push(100,200,300)

console.log(numbers11); // Ожидаемый результат: [100, 200, 300]


const fruits = ["Яблоко", "Банан", "Груша"];
// Удали последний элемент
fruits.pop()

console.log(fruits); // Ожидаемый результат: ["Яблоко", "Банан"]

const numbers12 = [5, 8, 12, 15];
// Удали последний элемент и проверь его

const removedElement = numbers12.pop();

if (removedElement > 10) {
    console.log(removedElement);
}

const numbers = [1, 2, 3, 4, 5];
// Удали три последних элемента

let i = 0;

while (i < 3) {
    numbers.pop()
    i ++
} 
console.log(numbers); // Ожидаемый результат: [1, 2]