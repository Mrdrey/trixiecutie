const button = document.getElementById("nobtn");
const message = document.getElementById("message");
const messages = [
  "Please click Yes naman mwaa ehe",
  "Bakit naman No hmpp",
  "Luh inulit pa",
  "kulet talaga hay",
  "Ako na to oh",
];
let messageIndex = 0;

button.addEventListener("click", function () {
  messageIndex = (messageIndex + 1) % messages.length;
  message.textContent = messages[messageIndex];
});
