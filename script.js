const greetings = [
  "Hello,",
  "Hi,",
  "வணக்கம்,",
  "Namaste,",
  "Hola,",
  "Bonjour,",
  "Hallo,",
  "Ciao,",
  "こんにちは,"
];

let index = 0;
const helloText = document.getElementById("helloText");

setInterval(() => {
  helloText.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % greetings.length;
    helloText.textContent = greetings[index];
    helloText.style.opacity = 1;
  }, 300);

}, 2000);
