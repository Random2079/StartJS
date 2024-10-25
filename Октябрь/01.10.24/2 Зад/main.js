// Список продуктов
const products = [
    { name: 'Хлеб', price: 50 },
    { name: 'Молоко', price: 60 },
    { name: 'Яблоки', price: 150 },
    { name: 'Мясо', price: 300 }
];


const AmountPrice = document.getElementById('totalPrice');

// products.forEach(productsElement => {
//     const Product = document.createElement('ul');
//     Product.innerHTML = `${productsElement.name},${productsElement.price}`
//     ShopList.appendChild(Product);
// });

function ListOfProducts(list){

    const ShopList = document.getElementById('shoppingList');

    list.forEach(productsElement => {

        const Product = document.createElement('ul');
        Product.textContent = `${productsElement.name},${productsElement.price}`
        ShopList.appendChild(Product);
    });
    
}

ListOfProducts(products);

function totalPriceList(list){
    const result = list.reduce((accamulator,currentValue) =>{
        return accamulator + currentValue.price
    },0)
    
    AmountPrice.textContent = result;
}

totalPriceList(products);

// const result = products.reduce((accamulator,currentValue) =>{
//     return accamulator + currentValue.price
// },0)

// AmountPrice.textContent = result;

