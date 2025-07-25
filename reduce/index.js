// Дан массив:

// const numbers = [10, 25, -5, 40, 0];
// 👉 Твоя задача:

// С помощью reduce() посчитай сумму всех чисел.

const numbers = [10, 25, -5, 40, 0];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// Дан массив строк:

// const colors = ["red", "blue", "red", "green", "blue", "blue"];
// 👉 Твоя задача:

// С помощью reduce() посчитай, сколько раз встречается каждый цвет.

const colors = ["red", "blue", "red", "green", "blue", "blue"];
const colorCount = colors.reduce((accumulator, color) => {
  accumulator[color] = (accumulator[color] || 0) + 1;
  return accumulator;
}, {});
console.log(colorCount);

// Дан массив пользователей с вложенными массивами друзей:

// const users = [
//   { name: "Аня", friends: ["Катя", "Маша"] },
//   { name: "Игорь", friends: ["Саша"] },
//   { name: "Вася", friends: [] }
// ];
// 👉 Твоя задача:

// С помощью reduce() собрать один массив всех имён друзей.

const users = [
  { name: "Аня", friends: ["Катя", "Маша"] },
  { name: "Игорь", friends: ["Саша"] },
  { name: "Вася", friends: [] },
];
const allFriends = users.reduce((accumulator, user) => {
  return accumulator.concat(user.friends);
}, []);
console.log(allFriends);
