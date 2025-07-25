// У тебя есть обычная функция:

// function greet(name) {
//   return "Привет, " + name + "!";
// }
// 👉 Твоя задача:

// Перепиши её в виде стрелочной функции.

// Затем сократи до однострочного варианта.

function greet(name) {
  return "Привет, " + name + "!";
}
const greetArrow = (name) => `Привет, ${name}!`;
console.log(greetArrow("Егор"));

// У тебя есть код:

// const person = {
//   name: "Катя",
//   sayHi: function () {
//     setTimeout(function () {
//       console.log("Привет, я " + this.name);
//     }, 1000);
//   }
// };

// person.sayHi();
// 👉 Твоя задача:

// Исправь код, чтобы this.name правильно ссылался на "Катя" — с помощью стрелочной функции.

const personArrow = {
  name: "Катя",
  sayHi: () => {
    setTimeout(() => {
      console.log("Привет, я " + personArrow.name);
    }, 1000);
  },
};
personArrow.sayHi();

// У тебя есть массив:

// const users = [
//   { name: "Аня", age: 22 },
//   { name: "Игорь", age: 30 },
//   { name: "Маша", age: 27 },
// ];
// 👉 Твоя задача:

// С помощью map() и стрелочной функции получить массив строк
const users = [
  { name: "Аня", age: 22 },
  { name: "Игорь", age: 30 },
  { name: "Маша", age: 27 },
];
const userStrings = users.map((user) => `${user.name} (${user.age} лет)`);
console.log(userStrings);
