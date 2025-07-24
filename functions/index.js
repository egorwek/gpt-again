// Напиши функцию multiply, которая принимает два аргумента a и b.
// Если один из аргументов не передан, по умолчанию он равен 1.
// Если хотя бы один из аргументов не является числом, верни строку "Неверный ввод".

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Неверный ввод";
  }
  return a * b;
}
console.log(multiply(2, 4));

// Создай функцию sumAll, которая принимает любое количество чисел (используй rest-параметр) и возвращает их сумму.

function sumAll(...args) {
  return args.reduce((sum, current) => {
    if (typeof current !== "number") {
      throw new Error("Все аргументы должны быть числами");
    }
    return sum + current;
  }, 0);
}

console.log(sumAll(1, 2, 3));

// Реализуй функцию createCounter, которая создаёт счётчик и возвращает другую функцию.
// Каждый вызов возвращённой функции должен увеличивать счётчик на 1 и выводить значение.

function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    console.log(count);
    return count;
  };
}
createCounter()();
