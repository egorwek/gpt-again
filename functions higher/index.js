// Создай функцию repeat(n, action), которая вызывает переданную функцию action ровно n раз.

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(5, (i) => {
  console.log(`Вызов номер ${i + 1}`);
});

// Создай функцию filterNumbers(arr, test), которая:

// принимает массив чисел и функцию test

// возвращает новый массив, содержащий только те числа, для которых test(num) возвращает true

function filterNumbers(arr, test) {
  return arr.filter(test);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterNumbers(numbers, (num) => num % 2 === 0);
console.log("Четные числа:", evenNumbers);

// Создай функцию greaterThan(n), которая возвращает новую функцию. Эта новая функция принимает число x и возвращает true, если x > n.

function greaterThan(n) {
  return function (x) {
    return x > n;
  };
}
const isGreaterThan5 = greaterThan(5);
console.log("5 больше 3?", isGreaterThan5(3));
