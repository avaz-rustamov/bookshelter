"use strict";
const elSiteGrid = document.querySelector(".site-grid");
const elLogoutBtn = document.querySelector(".site-btn__logout");
elLogoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  window.location.replace("login.html");
});

// ERROR MASSAGE
const renderError = function (errorMassage) {
  elSiteGrid.insertAdjacentText("beforeend", errorMassage);
};

// LOGIN
const localToken = window.localStorage.getItem("token");
if (!localToken) {
  window.location.replace("login.html");
}

// RENDER BOOKS
const renderBook = function (date) {
  try {
    const books = date.items;
    books.forEach((book) => {
      const html = `

    <div class="site-grid__wrapper">
      <div class="site-grid__img--wrapper">
        <img class="site-grid__img" src="${book.volumeInfo.imageLinks?.smallThumbnail}" alt="Book img" width="200" height="200" />
      </div>
      <div class="site-grid__heading">${book.volumeInfo.title}</div>
      <p class="site-grid__text">${book.volumeInfo.authors}</p>
      <p class="site-grid__text--date">${book.volumeInfo.publishedDate}</p>
      <div class="site-gird__footer--bookmark">
        <button class="site-grid__footer--button--bookmark">Bookmar</button>
        <button class="site-grid__footer--button">More Info</button>
      </div>
      <a href="${book.volumeInfo.previewLink}" class="site-gird__link" target="_blank">Read</a>
    </div>

  `;
      elSiteGrid.insertAdjacentHTML("beforeend", html);
    });
  } catch (err) {
    renderError(err.message);
  }
};

// FETCH DATE
const getBookDate = function (book) {
  const requst = fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    .then((res) => res.json())
    .then((date) => renderBook(date));
  return requst;
};
console.log(getBookDate("python"));
