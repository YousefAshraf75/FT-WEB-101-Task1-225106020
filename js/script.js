const btn = document.getElementById("theme-btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const nameInput = document.getElementById("name");
const hello = document.getElementById("hello");

nameInput.addEventListener("input", function () {
  if (nameInput.value === "") {
    hello.textContent = "";
  } else {
    hello.textContent = "Hello, " + nameInput.value + "!";
  }
});
