// Дан массив строк:

// const fruits = ["яблоко", "банан", "киви"];
// 👉 Твоя задача:

// С помощью forEach() выведи в консоль каждое значение с его индексом

const fruits = ["яблоко", "банан", "киви"];
fruits.forEach((fruit, index) => {
  console.log(`${index} Значение: ${fruit}`);
});

// У тебя есть массив чисел и объект-счётчик:

// const numbers = [1, 2, 3, 2, 4, 1, 1];
// const counter = {};
// 👉 Твоя задача:

// С помощью forEach() посчитай, сколько раз встречается каждое число, и запиши в объект counter.

const numbers = [1, 2, 3, 2, 4, 1, 1];
const counter = {};
numbers.forEach((num) => {
  counter[num] = (counter[num] || 0) + 1;
});
console.log(counter);

// Дан массив товаров:

// const products = [
//   { name: "Ноутбук", price: 1000 },
//   { name: "Телефон", price: 500 },
//   { name: "Книга", price: 20 }
// ];
// 👉 Твоя задача:

// С помощью forEach() увеличить цену каждого товара на 10% и округлить до целого числа.

const products = [
  { name: "Ноутбук", price: 1000 },
  { name: "Телефон", price: 500 },
  { name: "Книга", price: 20 },
];
products.forEach((product) => {
  product.price = Math.round(product.price * 1.1);
  console.log(`${product.name}: ${product.price}`);
});
