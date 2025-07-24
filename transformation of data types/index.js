// Преобразовать count в строку тремя разными способами и вывести значение и его тип в консоль.
let count = 123;
let countStr1 = String(count);
console.log(countStr1, typeof countStr1);

let countStr2 = count.toString();
console.log(countStr2, typeof countStr2);

let countStr3 = count + "";
console.log(countStr3, typeof countStr3);

// Написать цикл, который для каждого значения выводит:

// само значение,

// его тип (typeof),

// результат преобразования к булевому типу (Boolean(value))

const values = ["", "0", 0, null, undefined, "hello", [], {}, NaN];
function checkValues() {
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    console.log("Значение:", value);
    console.log("Тип:", typeof value);
    console.log("Булевое значение:", Boolean(value));
  }
}
checkValues();

// Преобразовать каждую переменную в число явно (через Number()).

// Преобразовать каждую переменную в булевое значение явно (через Boolean()).

// Для каждой переменной вывести:

// исходное значение,

// результат числового преобразования и его тип,

// результат булевого преобразования.

let a = "7";
let b = false;
let c = null;
let d = "3.14";

function transformVariables() {
  const variables = [a, b, c, d];
  for (let i = 0; i < variables.length; i++) {
    const value = variables[i];
    const numValue = Number(value);
    const boolValue = Boolean(value);

    console.log("Исходное значение:", value);
    console.log(
      "Результат числового преобразования:",
      numValue,
      "Тип:",
      typeof numValue
    );
    console.log("Результат булевого преобразования:", boolValue);
  }
}
transformVariables();
