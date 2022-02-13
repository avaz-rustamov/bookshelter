"use strict";
const localToken = window.localStorage.getItem("token");
if (!localToken) {
  window.location.replace("login.html");
}
const elSiteGrid = document.querySelector(".site-grid");

const elLogoutBtn = document.querySelector(".site-btn__logout");
elLogoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  window.location.replace("login.html");
});

const renderBook = function (date) {
  const html = `

    <div class="site-grid__wrapper">
      <div class="site-grid__img--wrapper">
        <img src="" alt="" />
      </div>
      <div class="site-grid__heading"></div>
      <p class="site-grid__text"></p>
      <p class="site-grid__text--date"></p>
      <div class="site-gird__footer--bookmark">
        <button class="site-grid__footer--button--bookmark"></button>
        <button class="site-grid__footer--button"></button>
      </div>
      <a href="" class="site-gird__link"></a>
    </div>

  `;
  elSiteGrid.insertAdjacentHTML("beforeend", html);
};

const getBookDate = function (book) {
  const requst = fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    .then((res) => res.json())
    .then((date) => date);
  return requst;
};

console.log(getBookDate("python"));
