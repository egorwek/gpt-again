// У тебя есть массив:

// const numbers = [1, -3, 5, 0, -8, 12];
// 👉 Твоя задача:

// С помощью filter() создать новый массив, в который попадут только положительные и нечётные числа.

const numbers = [1, -3, 5, 0, -8, 12];
const positiveOddNumbers = numbers.filter((num) => num > 0 && num % 2 !== 0);
console.log(positiveOddNumbers);

// Есть массив товаров:

// const products = [
//   { name: "Телефон", price: 1500 },
//   { name: "Ноутбук", price: 3000 },
//   { name: "Книга", price: 0 },
//   { name: "Флешка", price: 15 },
// ];
// 👉 Твоя задача:

// С помощью filter() создать новый массив, в который попадут только товары с ценой выше 100.

// 📌 А затем выведи их названия, используя map() после filter().

const products = [
  { name: "Телефон", price: 1500 },
  { name: "Ноутбук", price: 3000 },
  { name: "Книга", price: 0 },
  { name: "Флешка", price: 15 },
];
const expensiveProducts = products
  .filter((product) => product.price > 100)
  .map((product) => product.name);
console.log(expensiveProducts);

// Дан массив с "мусорными" значениями:

// const mixed = [0, "Привет", "", null, "Мир", undefined, false, "!", NaN];
// 👉 Твоя задача:

// С помощью filter() создать новый массив, в котором останутся только значения, приводимые к true.
const mixed = [0, "Привет", "", null, "Мир", undefined, false, "!", NaN];
const truthyValues = mixed.filter((value) => Boolean(value));
console.log(truthyValues);
