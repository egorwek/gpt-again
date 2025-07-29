// У тебя есть объект:

// const user = {
//   name: "Ирина",
//   age: 28,
//   city: "Кишинёв"
// };
// 👉 Твоя задача:

// С помощью деструктуризации достань свойства name и age и выведи их

const user = {
  name: "Ирина",
  age: 28,
  city: "Кишинёв",
};
const { name, age } = user;
console.log(`Имя: ${name}, Возраст: ${age}`);

// У тебя есть массив:

// const colors = ["red", "green", "blue", "yellow"];
// 👉 Твоя задача:

// С помощью деструктуризации получи второй и четвёртый элементы.

// Выведи строку

const colors = ["red", "green", "blue", "yellow"];
const [, secondColor, , fourthColor] = colors;
console.log(`Второй цвет: ${secondColor}, Четвёртый цвет: ${fourthColor}`);

// Напиши функцию printProduct, которая принимает объект:

// {
//   title: "Ноутбук",
//   price: 2400,
//   inStock: true
// }
// 👉 Твоя задача:

// Использовать деструктуризацию прямо в параметрах функции

function printProduct({ title, price, inStock }) {
  console.log(`Название: ${title}, Цена: ${price}, В наличии: ${inStock}`);
}
printProduct({
  title: "Ноутбук",
  price: 2400,
  inStock: true,
});
