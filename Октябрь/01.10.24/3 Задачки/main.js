console.log(`#1 Задание`)

const numbers = [-10, 15, -3, 20, 5, -7];

console.log(numbers.filter(number => number > 0 || number === 0))

console.log(`----------------------------`)

console.log(`#2 Задание`)

const numbers2 = [10, 20, 30, 40, 50];

console.log(numbers2.reduce((acumulator, currentValue) => acumulator + currentValue))

console.log(`----------------------------`)

console.log(`#3 Задание`)

const sum = (...elements) => {
    console.log(elements.reduce((acumulator, currentValue) => acumulator + currentValue))
}

sum(1, 2, 3, 4); // 10
sum(5, 10);      // 15

console.log(`----------------------------`)

console.log(`#4 Задание`)

const numbers3 = [5, 12, 7, 22, 19];

const result = numbers3.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
},numbers3[0])

console.log(result)
