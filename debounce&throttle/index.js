// Смоделируй функцию search(query), которая вызывается при каждом вводе символа в поле поиска.

// Реализуй debounce-функцию, которая:

// вызывает search(query) только через 500 мс после последнего ввода

// Используй setTimeout и clearTimeout.

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
function search(query) {
  console.log(`Поиск по запросу: ${query}`);
}
const debouncedSearch = debounce(search, 500);
document.getElementById("searchInput").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
// Сделай обработчик события scroll, который:

// считает, сколько раз пользователь прокручивает страницу

// но вызывается не чаще одного раза в 300 мс

// 📌 Используй throttle-функцию.

let scrollCount = 0;
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
function handleScroll() {
  scrollCount++;
  console.log(`Прокрутка страницы: ${scrollCount} раз`);
}
const throttledScroll = throttle(handleScroll, 300);
window.addEventListener("scroll", throttledScroll);

// 👉 Условие:

// Реализуй одну и ту же функцию logPosition(), которая выводит mouseX, mouseY в консоль.

// Оберни её сначала в debounce, затем — в throttle.

// Повесь обе версии на событие mousemove (по очереди).

// Посмотри, чем отличается поведение на практике.

function logPosition(event) {
  console.log(`Mouse Position: X=${event.clientX}, Y=${event.clientY}`);
}
const debouncedLogPosition = debounce(logPosition, 500);
const throttledLogPosition = throttle(logPosition, 500);
document.addEventListener("mousemove", (e) => {
  debouncedLogPosition(e);
  throttledLogPosition(e);
});
