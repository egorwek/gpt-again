// Дана строка:

// const text = "Это просто строка из нескольких слов.";
// 👉 Твоя задача:

// С помощью split(" ") разбей строку на массив слов.

// Выведи количество слов.

const text = "Это просто строка из нескольких слов.";
const words = text.split(" ");
const wordCount = words.length;
console.log("Количество слов:", wordCount);

// Дана строка:

// const input = "12, 5, 8, 130, 44";
// 👉 Твоя задача:

// Раздели строку на массив чисел.

// Преобразуй каждый элемент в тип number.

// Отфильтруй числа, которые меньше 10.

const input = "12, 5, 8, 130, 44";
const numbers = input.split(", ").map(Number);
const filteredNumbers = numbers.filter((num) => num >= 10);
console.log("Числа >= 10:", filteredNumbers);

// Дана строка запроса (как из URL):

// const query = "user=ivan&age=25&admin=true";
// 👉 Твоя задача:

// Разбить строку на пары ключ=значение.

// Создать из неё объект
const query = "user=ivan&age=25&admin=true";
const params = query.split("&").reduce((acc, pair) => {
  const [key, value] = pair.split("=");
  acc[key] = value;
  return acc;
}, {});
console.log("Параметры запроса:", params);
