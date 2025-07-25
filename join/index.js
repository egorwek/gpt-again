// Дан массив имён:

// const names = ["Катя", "Игорь", "Маша"];
// 👉 Твоя задача:

// Сформировать строку в формате:

// "Катя, Игорь и Маша"

// Используй join() для соединения всех кроме последнего,

// Добавь "и" перед последним вручную.

const names = ["Катя", "Игорь", "Маша"];
const lastName = names.pop();
const joinedNames = names.join(", ");
const result = `${joinedNames} и ${lastName}`;
console.log(result);

// Дан массив цифр:

// const digits = [3, 7, 3, 5, 5, 5, 1, 2, 1, 2];
// 👉 Твоя задача:

// Сформировать строку телефонного номера.

const digits = [3, 7, 3, 5, 5, 5, 1, 2, 1, 2];
const phoneNumber = `+7 (${digits.slice(0, 3).join("")}) ${digits
  .slice(3, 6)
  .join("")}-${digits.slice(6, 8).join("")}-${digits.slice(8).join("")}`;
console.log(phoneNumber);

// Дан массив:

// const items = ["Главная", "О нас", "Контакты"];
// 👉 Твоя задача:

// С помощью join() сформировать строку HTML-навигации.

const items = ["Главная", "О нас", "Контакты"];
const navigation = items.map((item) => `<li>${item}</li>`).join("");
console.log(`<ul>${navigation}</ul>`);
