// Напиши функцию, которая будет считать сумму квадратов чисел. 
// То есть, на вход поступает массив из чисел [2, 4, 5], вычисления 2^2 + 4^2 + 5^2, вывод ответа - 45. 
// Примечание - добавь проверку на пустой массив. Для решения задачи используй встроенный метод .reduce(). 

// function sumOfSquares(arr) {
//     if (arr.length === 0) {
//         console.log('Пусто') 
//     }
//     // return arr.reduce((sum, num) => sum + num ** 2, 0);
//     arr.forEach(element => {
//         result = element ** 2
//     });
// }

// const numbers = [2, 4, 5];
// console.log(sumOfSquares(numbers)); 

// Напиши стрелочную функцию, которая принимает булево значение (true/false), и выводит текстовый формат 
// Yes/No, в зависимости от значения. Найди максимально лаконичное и короткое решение для этого задания. 
// Обязательно добавь проверку на тип переданного аргумента (тебе поможет typeof). 
// Как должно работать - если true, выводит Yes, иначе No. 
// Поступил любой другой тип - выводим Not a boolean value.

const isBoolean = (value) => {
    // let check = typeof value == 'boolean' ? 'Yes' : "No";
    // return check;
    return value === false || value === true ? "Bolean value" : "Not bolean value"
}

console.log(isBoolean(false));

// Напиши функцию, которая принимает не отрицательное число, например 54321, 
// и возвращает массив из чисел в обратном порядке [1, 2, 3, 4, 5].
// Если на вход поступает 0 - возвращаем массив со значением [0].

const reverseMasiv = (Masiv) => {
    for (let i = 0; i < Masiv.length; i++){
        if (Masiv[i] < 0){
            return 'Отрицательное число'
        } else if (Masiv[i] === 0){
            return [0]
        }
    }
    // for (let i = 0; i < Masiv.length; i--){

    // }
    let reverseCom = Masiv.reverse();
    return reverseCom;
}

let list = [1,2,3,4,5];
console.log(reverseMasiv(list));


// Твои друзья попросили тебя распечатать что-то на принтере. 
// Тебе нужно написать функцию, которая вернет количество бумаги, 
// которое потребуется для печати. Например, 5 друзей, у каждого друга по 5 страниц материала. 
// Друзья - f, страницы - p. Как работает: f = 5, p = 5. Результат: 25. 
// Если на вход поступает отрицательное число, возвращаем ошибку Invalid number.

const Print = (f,p) =>{
    return (f >= 0 && p >= 0) ? f * p : 'Invalid'
}

console.log(Print(2,4));

