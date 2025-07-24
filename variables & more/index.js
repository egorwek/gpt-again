// Проверка типов:

// Напиши функцию isNumber(value), которая возвращает true, если значение — число, и false в остальных случаях.

const num = 4;
const str = "a";
function isNumber() {
  const isNum = typeof num === "number" ? true : false;
  const isStr = typeof str === "number" ? true : false;
  console.log(isNum, isStr);
}
isNumber();

// Используя тернарный оператор, присвой переменной access значение "Разрешено" или "Запрещено" в зависимости от переменной age.

let access = "";
const age = 19;
function accessAge() {
  let access = age > 18 ? "Разрешено" : "Запрещено";
  console.log(access);
}
accessAge();

// Преобразуй строку "123" в число тремя разными способами.

let numString = "123";

let num2 = +numString;
console.log(num2);

let num3 = Number(numString);
console.log(num3);

let num4 = parseInt(numString);
console.log(num4);

// Напиши цикл, который выведет тип каждого элемента массива.

const values = [
  undefined,
  null,
  true,
  123,
  "abc",
  {},
  [],
  function () {},
  Symbol("id"),
];

function valuesFor() {
  for (i = 0; i < values.length; i++) {
    console.log(values[i]);
  }
}
valuesFor();
