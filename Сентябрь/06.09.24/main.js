// const programmer_hobby = () => console.log(programer.hobby[0])
// const junior = () => console.log('Джуниор')
// const midle = () => console.log('Миддл')
// const senior = () => console.log('Сеньёр')

//  programer = {
//     name: 'Ваня',
//     age: 25,
//     hobby: ['trading','games','watch movie'],
//     salary: 200000,
//     car: true
//  }

// if (programer.salary <= 50000) {
//     junior()
//     programmer_hobby()
// } else if (programer.salary <= 120000) {
//     midle()
//     programmer_hobby()
// } else {
//     senior()
//     programmer_hobby()
// }

// calculateSavings = (initialAmount, interestRate, years) => {
//     initialAmount = initialAmount + (initialAmount / 100) * (interestRate * years);

//     console.log(initialAmount)
// }

// calculateSavings(10000, 18, 1)




// const saleAnylisis = (masiv) => {
//     let totalSales = 0;
//     let avaregaSales = 0;
//     let maxSales = 0;
//     let minSales = 0;
//     let minimal = masiv[0];


//     for (let i = 0; i < masiv.length; i++) {
//         totalSales += masiv[i];
//     }
//     for (let i = 0; i < masiv.length; i++) {
//         if (maxSales < masiv[i]){
//             maxSales = masiv[i]
//         }
//     }

//     for (let i = 0; i < masiv.length; i++) {
//         totalSales += masiv[i];
//         if (minimal > masiv[i]) {
//             minimal = masiv[i]
//         }else{
//             minimal = masiv[0]
//         }
//         if (maxSales < masiv[i]){
//             maxSales = masiv[i]
//         }
//     }
//     minSales = minimal
//     avaregaSales = totalSales / masiv.length
//     console.log(totalSales,avaregaSales, maxSales, minSales)
// }



// saleAnylisis([1200, 1500, 1300, 1700]);

// const saleAnylisis = (masiv) => {e
//     let totalSales = 0;
//     let maxSales = masiv[0];  // Инициализируем первым элементом
//     let minSales = masiv[0];  // Инициализируем первым элементом

//     // Проходим по массиву один раз
//     for (let i = 0; i < masiv.length; i++) {
//         totalSales += masiv[i];

//         if (minSales > masiv[i]) {
//             minSales = masiv[i]
//         }else{
//             maxSales = masiv[i]
//         }
//       // здесь нахождение минимума и максимума 
//     }

//     // Вычисление средней продажи после цикла
//     let averageSales = totalSales  / masiv.length;

//     // Выводим результаты
//     console.log(totalSales, averageSales, maxSales, minSales);
// }

// saleAnylisis([500, 1000]);
