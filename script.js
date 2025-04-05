let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "1984", author: "George Orwell" },
];

const bookList = document.getElementById("book-list");
const searchInput = document.getElementById("searchInput");
const addBookForm = document.getElementById("addBookForm");

function displayBooks(filter = "") {
  bookList.innerHTML = "";
  books
    .filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(book => {
      const bookDiv = document.createElement("div");
      bookDiv.className = "book";
      bookDiv.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
      bookList.appendChild(bookDiv);
    });
}

addBookForm.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  books.push({ title, author });
  displayBooks();
  addBookForm.reset();
});

searchInput.addEventListener("input", e => {
  displayBooks(e.target.value);
});

displayBooks();
