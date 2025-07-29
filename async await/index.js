// Сделай GET-запрос по адресу:

// https://jsonplaceholder.typicode.com/users
// 👉 Твоя задача:

// Создай асинхронную функцию loadUsers().

// С помощью fetch получи данные.

// Выведи в консоль имена пользователей.

// 📌 Используй async/await.

async function loadUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    users.forEach((user) => {
      console.log(`Имя пользователя: ${user.name}`);
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}
loadUsers();

// Сделай запрос на неправильный URL:

// https://jsonplaceholder.typicode.com/userrs
// 👉 Твоя задача:

// Оберни fetch в try...catch.

// Если произошла ошибка или response.ok === false, выведи:
// Ошибка загрузки данных

async function loadInvalidUsers() {
  const invalidUrl = "https://jsonplaceholder.typicode.com/userrs";
  try {
    const response = await fetch(invalidUrl);
    if (!response.ok) {
      throw new Error("Соединение не установлено");
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
}
loadInvalidUsers();

// Получи пост с ID 1:

// https://jsonplaceholder.typicode.com/posts/1
// Из полученного поста возьми поле userId.

// Сделай второй запрос — получи пользователя с этим userId:

// https://jsonplaceholder.typicode.com/users/{userId}
// Выведи имя автора поста.
async function loadPostAndUser() {
  const postUrl = "https://jsonplaceholder.typicode.com/posts/1";
  try {
    const postResponse = await fetch(postUrl);
    if (!postResponse.ok) {
      throw new Error("Ошибка при получении поста");
    }
    const post = await postResponse.json();
    const userId = post.userId;

    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const userResponse = await fetch(userUrl);
    if (!userResponse.ok) {
      throw new Error("Ошибка при получении пользователя");
    }
    const user = await userResponse.json();
    console.log(`Имя автора поста: ${user.name}`);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
loadPostAndUser();
