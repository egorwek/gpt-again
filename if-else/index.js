// Напиши функцию canAccess(age, hasTicket), которая возвращает строку:

// "Доступ разрешён" — если age >= 18 и hasTicket === true,

// "Нет билета" — если возраст подходит, но билета нет,

// "Отказано" — если возраст < 18.

// ❗ Используй:

// if-else в первом варианте,

// затем перепиши через тернарный оператор и && / ||.

function canAccess(age, hasTicket) {
  if (age >= 18 && hasTicket) {
    return "Доступ разрешён";
  } else if (age >= 18 && !hasTicket) {
    return "Нет билета";
  } else {
    return "Отказано";
  }
}
console.log(canAccess(20, true));

function canAccessTernary(age, hasTicket) {
  return age >= 18
    ? hasTicket
      ? "Доступ разрешён"
      : "Нет билета"
    : "Отказано";
}
console.log(canAccessTernary(20, true));

// У тебя есть переменные:

// let login = "admin";
// let password = "12345";
// 👉 Твоя задача:

// Используя if-else и логические операторы &&, ||, напиши проверку:

// Если login === "admin" и password === "12345" → вывести "Доступ разрешён".

// Если login не указан (пустая строка, null, undefined) → вывести "Введите логин".

// Если пароль не верный → вывести "Неверный пароль".

// Затем перепиши это условие с использованием тернарного оператора ?: и логических операторов || / &&.

// 📌 Пример:

let login = "admin";
let password = "12345";
function checkAccess(login, password) {
  if (login === "admin" && password === "12345") {
    return "Доступ разрешён";
  } else if (!login) {
    return "Введите логин";
  } else {
    return "Неверный пароль";
  }
}
console.log(checkAccess(login, password));

function checkAccessTernary(login, password) {
  return login === "admin" && password === "12345"
    ? "Доступ разрешён"
    : !login
    ? "Введите логин"
    : "Неверный пароль";
}
console.log(checkAccessTernary(login, password));

// let theme = "";          // пользователь выбрал тему
// let savedTheme = null;   // тема из localStorage
// let defaultTheme = "light";
// 👉 Твоя задача:

// Создай переменную activeTheme, которая получает значение по следующей логике:

// Если theme задан и не пустой — используй его.

// Если theme не задан, но есть savedTheme — используй её.

// Если и theme, и savedTheme пусты, используй defaultTheme.

// 📌 Используй ??, ||, && и тернарный оператор, чтобы записать условие в одну строку.

let theme = "";
let savedTheme = null;
let defaultTheme = "light";

let activeTheme = theme || savedTheme || defaultTheme;
console.log(activeTheme);
