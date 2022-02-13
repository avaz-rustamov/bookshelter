"use-strict";
let elForm = document.querySelector(".login-form");
let elLoginInput = document.querySelector(".login-input");
let elLoginInput__password = document.querySelector(".login-input__password");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const userInput = elLoginInput.value;
  const userPassword = elLoginInput__password;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userInput,
      password: userPassword,
    }),
  })
    .then((res) => res.json())
    .then((date) => {
      if (date.token) {
        window.localStorage.setItem("token", date.token);
        window.location.replace("index.html");
      } else {
        alert("Username yoki Password noto'gri");
      }
    });
});
