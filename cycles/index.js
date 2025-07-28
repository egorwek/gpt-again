// 👉 Выведи все простые числа от 2 до 50.

// 📌 Подсказка:

// Используй внешний for-цикл по числам от 2 до 50.

// Внутренний цикл проверяет, делится ли число на что-либо кроме 1 и самого себя.

// Если делится — break.

for (let i = 2; i <= 50; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// Дан массив:

// const arr = [1, 2, [3, 4], 5, [6, 7, [8]]];
// 👉 Напиши код, который считает сумму всех чисел, включая вложенные уровни любой глубины.

// 📌 Подсказка:

// Используй рекурсивную функцию и for...of или for.

const arr = [1, 2, [3, 4], 5, [6, 7, [8]]];
function sumNestedArray(array) {
  let sum = 0;

  for (const item of array) {
    if (Array.isArray(item)) {
      sum += sumNestedArray(item);
    } else {
      sum += item;
    }
  }

  return sum;
}
console.log(sumNestedArray(arr));

// 👉 Выведи в консоль таблицу умножения от 1 до 10 в виде:

// 1 × 1 = 1
// 1 × 2 = 2
// ...
// 10 × 10 = 100

const rows = 10;
const cols = 10;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}
