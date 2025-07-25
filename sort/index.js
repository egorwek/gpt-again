// Дан массив:

// const numbers = [10, 3, 25, 7, 1];
// 👉 Твоя задача:

// Отсортируй массив по возрастанию.

// Отсортируй массив по убыванию.

const numbers = [10, 3, 25, 7, 1];
const increasing = [...numbers].sort((a, b) => a - b);
const decreasing = [...numbers].sort((a, b) => b - a);
console.log("По возрастанию:", increasing);
console.log("По убыванию:", decreasing);

// Дан массив строк:

// const words = ["банан", "киви", "яблоко", "груша"];
// 👉 Твоя задача:

// С помощью sort() отсортировать строки по длине слова (от коротких к длинным).

const words = ["банан", "киви", "яблоко", "груша"];
const sortedByLength = [...words].sort((a, b) => a.length - b.length);
console.log("По длине слов:", sortedByLength);

// Дан массив пользователей:

// const users = [
//   { name: "Игорь", age: 30 },
//   { name: "Катя", age: 25 },
//   { name: "Маша", age: 25 },
//   { name: "Борис", age: 40 },
// ];
// 👉 Твоя задача:

// С помощью sort() отсортировать пользователей:

// Сначала по возрасту по возрастанию.

// Если возраст одинаковый — по имени в алфавитном порядке.

const users = [
  { name: "Игорь", age: 30 },
  { name: "Катя", age: 25 },
  { name: "Маша", age: 25 },
  { name: "Борис", age: 40 },
];
const sortedUsers = [...users].sort((a, b) => {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name);
  }
  return a.age - b.age;
});
console.log("Отсортированные пользователи:", sortedUsers);
