// Вот функция, которая НЕ является чистой:

// function addToArray(arr, item) {
//   arr.push(item);
//   return arr;
// }
// 👉 Перепиши её так, чтобы она не изменяла исходный массив, а возвращала новый массив.

function addToArray(arr, item) {
  arr.push(item);
  return arr;
}
function addToArrayClear(arr, item) {
  return [...arr, item];
}
console.log(addToArrayClear([1, 2, 3], 4));

// Напиши чистую функцию sum(a, b), которая просто возвращает сумму.

// Напиши нечистую функцию logSum(a, b), которая:

// считает сумму

// и выводит её в console.log (побочный эффект).

function sum(a, b) {
  return a + b;
}
function logSum(a, b) {
  const result = a + b;
  console.log("Сумма:", result);
  return result;
}
console.log(sum(5, 10));
logSum(5, 10);

// Напиши нечистую функцию doubleAndStore(arr), которая:

// умножает каждый элемент массива на 2

// и изменяет исходный массив

// и записывает результат в глобальную переменную lastResult

// Напиши чистую функцию doublePure(arr), которая:

// возвращает новый массив, где все элементы умножены на 2

// не изменяет входной массив

// не использует глобальные переменные

function doubleAndStore(arr) {
  const lastResult = arr.map((num) => num * 2);
  arr.length = 0;
  arr.push(...lastResult);
  return lastResult;
}
function doublePure(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleAndStore([1, 2, 3]));
console.log(doublePure([1, 2, 3]));
