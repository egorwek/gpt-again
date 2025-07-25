// Дан массив объектов:

// const products = [
//   { id: 1, name: "Книга", price: 20 },
//   { id: 2, name: "Телефон", price: 500 },
//   { id: 3, name: "Ноутбук", price: 1500 },
// ];
// 👉 Твоя задача:

// С помощью find() найти товар с именем "Телефон" и вывести его объект.

const products = [
  { id: 1, name: "Книга", price: 20 },
  { id: 2, name: "Телефон", price: 500 },
  { id: 3, name: "Ноутбук", price: 1500 },
];
const foundProduct = products.find((product) => product.name === "Телефон");
console.log(foundProduct);

// Дан массив:

// const users = [
//   { name: "Аня", age: 15 },
//   { name: "Маша", age: 17 },
//   { name: "Игорь", age: 19 },
//   { name: "Саша", age: 16 },
// ];
// 👉 Твоя задача:

// С помощью find() вернуть первого пользователя, чей возраст 18 или больше.

const users = [
  { name: "Аня", age: 15 },
  { name: "Маша", age: 17 },
  { name: "Игорь", age: 19 },
  { name: "Саша", age: 16 },
];
const adultUser = users.find((user) => user.age >= 18);
console.log(adultUser);

// Дан массив заказов, у каждого — список товаров:

// const orders = [
//   { id: 101, items: ["мышь", "клавиатура"] },
//   { id: 102, items: ["монитор"] },
//   { id: 103, items: ["ноутбук", "мышь"] },
// ];
// 👉 Твоя задача:

// С помощью find() найти первый заказ, в котором встречается товар "ноутбук".

const orders = [
  { id: 101, items: ["мышь", "клавиатура"] },
  { id: 102, items: ["монитор"] },
  { id: 103, items: ["ноутбук", "мышь"] },
];
const orderWithLaptop = orders.find((order) => order.items.includes("ноутбук"));
console.log(orderWithLaptop);
