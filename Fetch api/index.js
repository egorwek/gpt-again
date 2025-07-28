// Сделай GET-запрос к:

// https://jsonplaceholder.typicode.com/posts
// 👉 Твоя задача:

// Получи данные.

// Выведи в консоль заголовки (title) первых 5 постов.
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => response.json())
  .then((posts) => {
    posts.slice(0, 5).forEach((post) => {
      console.log(`Title: ${post.title}`);
    });
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });

//   Сделай запрос к неправильному URL:

// https://jsonplaceholder.typicode.com/postsss
// 👉 Твоя задача:

// Обработай ошибку с помощью try...catch.

// Если ошибка — выведи "Произошла ошибка при загрузке данных".

const invalidUrl = "https://jsonplaceholder.typicode.com/postsss";
fetch(invalidUrl).catch((error) => {
  console.error("Произошла ошибка при загрузке данных:", error);
});
console.error("Ошибка при копировании текста:", error);

// Сделай POST-запрос на:
// https://jsonplaceholder.typicode.com/posts
// 👉 Твоя задача:

// Отправь объект:

// {
//   title: "Мой пост",
//   body: "Текст поста",
//   userId: 1
// }
// Выведи в консоль id нового созданного поста из ответа.

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Мой пост",
    body: "Текст поста",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(`ID нового поста: ${data.id}`);
  })
  .catch((error) => {
    console.error("Ошибка при создании поста:", error);
  });
