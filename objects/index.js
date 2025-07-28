// Дан объект:

// const student = {
//   name: "Кирилл",
//   age: 21,
//   group: "B-12",
//   isActive: true
// };
// 👉 Твоя задача:

// С помощью for...in вывести в консоль все ключи и значения объекта в формате:

// name: Кирилл
// age: 21
// ...
// Посчитай, сколько булевых значений есть среди свойств.

const student = {
  name: "Кирилл",
  age: 21,
  group: "B-12",
  isActive: true,
};
let booleanCount = 0;
for (const key in student) {
  console.log(`${key}: ${student[key]}`);
  if (typeof student[key] === "boolean") {
    booleanCount++;
  }
}
console.log(`Количество булевых значений: ${booleanCount}`);

// Дан объект с зарплатами:

// const salaries = {
//   Алексей: 500,
//   Мария: 800,
//   Иван: 1200
// };
// 👉 Твоя задача:

// Найди сумму всех зарплат.

// Выведи имя человека с максимальной зарплатой.

const salaries = {
  Алексей: 500,
  Мария: 800,
  Иван: 1200,
};
let totalSalary = 0;
let maxSalary = 0;
let maxSalaryName = "";
for (const name in salaries) {
  totalSalary += salaries[name];
  if (salaries[name] > maxSalary) {
    maxSalary = salaries[name];
    maxSalaryName = name;
  }
}
console.log(`Сумма всех зарплат: ${totalSalary}`);
console.log(
  `Человек с максимальной зарплатой: ${maxSalaryName} (${maxSalary})`
);

// Дан объект:

// const data = {
//   user: {
//     id: 101,
//     profile: {
//       name: "Света",
//       contacts: {
//         email: "sveta@example.com",
//         phone: "123-456"
//       }
//     }
//   }
// };
// 👉 Твоя задача:

// Выведи имя пользователя и его email.

// Проверь, есть ли поле phone у contacts.

// Если есть — измени его значение на "000-000".

const data = {
  user: {
    id: 101,
    profile: {
      name: "Света",
      contacts: {
        email: "sveta@example.com",
        phone: "123-456",
      },
    },
  },
};

if (data.user.profile.contacts.phone) {
  data.user.profile.contacts.phone = "000-000";
  console.log(`Новый телефон: ${data.user.profile.contacts.phone}`);
}
console.log(`Имя пользователя: ${data.user.profile.name}`);
console.log(`Email: ${data.user.profile.contacts.email}`);
