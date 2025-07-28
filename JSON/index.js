// У тебя есть объект:

// const user = {
//   name: "Анна",
//   age: 28,
//   isAdmin: false
// };
// 👉 Твоя задача:

// Преобразуй объект в строку JSON.

// Затем снова распарси её обратно в объект.

// Выведи новый объект в консоль и проверь, что тип данных такой же, как у исходного.

const user = {
  name: "Анна",
  age: 28,
  isAdmin: false,
};
const jsonString = JSON.stringify(user);
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser + typeof parsedUser);

// У тебя есть объект:

// const person = {
//   name: "Игорь",
//   password: "12345",
//   role: "admin"
// };
// 👉 Твоя задача:

// Сериализуй объект в JSON, но исключи поле password.

// Используй второй аргумент в JSON.stringify() (replacer).

const person = {
  name: "Игорь",
  password: "12345",
  role: "admin",
};
const jsonString2 = JSON.stringify(person, (key, value) => {
  if (key === "password") {
    return undefined;
  }
  return value;
});

console.log(jsonString2);

// У тебя есть строка:

// const data = `{
//   "user": {
//     "name": "Маша",
//     "contacts": {
//       "email": "masha@mail.com",
//       "phone": "123-456"
//     }
//   }
// }`;
// 👉 Твоя задача:

// Распарси строку в объект.

// Измени email на "new@mail.com".

// Снова преврати объект в JSON-строку.

const data = `{
  "user": {
    "name": "Маша",
    "contacts": {
      "email": "masha@mail.com",
      "phone": "123-456"
    }
   }
 }`;

const parsedData = JSON.parse(data);
parsedData.user.contacts.email = "new@mail.com";
const updatedJsonString = JSON.stringify(parsedData);
console.log(updatedJsonString);
