// 👉 Сделай запрос по ссылке:

// https://jsonplaceholder.typicode.com/users
// 🔹 Твоя задача:

// Получи список пользователей.

// Выведи в консоль их имена (name) и email.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });

//   🔹 Твоя задача:

// Спроси у пользователя имя через prompt().

// Сохрани его в localStorage с ключом "username".

// Если имя уже сохранено — просто покажи alert("Привет снова, [имя]"), без prompt.
const storedName = localStorage.getItem("username");
if (storedName) {
  alert(`Привет снова, ${storedName}`);
} else {
  const name = prompt("Как тебя зовут?");
  if (name) {
    localStorage.setItem("username", name);
    alert(`Привет, ${name}`);
  } else {
    alert("Имя не введено.");
  }
}

// 🔹 Твоя задача:

// Проверь, поддерживаются ли уведомления в браузере (Notification).

// Если да — запроси разрешение.

// Покажи уведомление "Добро пожаловать!".

// Скопируй этот текст "Hello from JS" в буфер обмена с помощью navigator.clipboard.writeText().

if ("Notification" in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Добро пожаловать!");
      navigator.clipboard
        .writeText("Hello from JS")
        .then(() => {
          console.log("Текст скопирован в буфер обмена.");
        })
        .catch((error) => {
          console.error("Ошибка при копировании текста:", error);
        });
    }
  });
}
