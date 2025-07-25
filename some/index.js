// Дан массив чисел:

// const numbers = [3, 7, 12, -5, 0, 8];
// 👉 Твоя задача:

// С помощью some() определить, есть ли хотя бы одно отрицательное число в массиве.c

const numbers = [3, 7, 12, -5, 0, 8];
const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative);

// Дан массив пользователей:

// const users = [
//   { name: "Катя", age: 25 },
//   { name: "Игорь", age: 41 },
//   { name: "Борис", age: 63 },
//   { name: "Нина", age: 38 },
// ];
// 👉 Твоя задача:

// С помощью some() проверить, есть ли хотя бы один пользователь старше 60 лет.
const users = [
  { name: "Катя", age: 25 },
  { name: "Игорь", age: 41 },
  { name: "Борис", age: 63 },
  { name: "Нина", age: 38 },
];
const hasOlder = users.some((user) => user.age > 60);
console.log(hasOlder);

// Дан массив заказов, каждый из которых содержит список товаров:

// const orders = [
//   { id: 1, items: ["чехол", "зарядка"] },
//   { id: 2, items: ["наушники"] },
//   { id: 3, items: ["кабель", "адаптер"] },
// ];
// 👉 Твоя задача:

// С помощью some() определить, есть ли хотя бы один заказ, содержащий "наушники".

const orders = [
  { id: 1, items: ["чехол", "зарядка"] },
  { id: 2, items: ["наушники"] },
  { id: 3, items: ["кабель", "адаптер"] },
];
const hasHeadphones = orders.some((order) => order.items.includes("наушники"));
console.log(hasHeadphones);
