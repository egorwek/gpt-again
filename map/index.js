// У тебя есть массив чисел:

// const numbers = [10, 20, 30, 40];
// 👉 Твоя задача:

// С помощью map() создай новый массив строк вида:

const numbers = [10, 20, 30, 40];

function formatNumbers(arr) {
  return arr.map((num) => `Число: ${num}`);
}
console.log(formatNumbers(numbers));

// Дан массив пользователей:

// const users = [
//   { id: 1, name: "Аня", age: 22 },
//   { id: 2, name: "Игорь", age: 30 },
//   { id: 3, name: "Маша", age: 27 },
// ];
// 👉 Твоя задача:

// С помощью map() получить новый массив только с именами пользователей:

// ["Аня", "Игорь", "Маша"]
// А затем — массив строк вроде:

// ["Аня (22)", "Игорь (30)", "Маша (27)"]

const users = [
  { id: 1, name: "Аня", age: 22 },
  { id: 2, name: "Игорь", age: 30 },
  { id: 3, name: "Маша", age: 27 },
];

function getUserNames(arr) {
  const names = arr.map((user) => user.name);
  console.log(names);

  const namesWithAge = arr.map((user) => `${user.name} (${user.age})`);
  console.log(namesWithAge);
}
getUserNames(users);

// У тебя есть двумерный массив:

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// 👉 Твоя задача:

// С помощью вложенного map() создать новый массив, в котором каждое число умножено на 2:

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function doubleMatrix(arr) {
  return arr.map((row) => row.map((num) => num * 2));
}
console.log(doubleMatrix(matrix));
doubleMatrix(matrix);
