const booksContainer = document.querySelector('.booksContainer');

const showBooks = () => {
  booksContainer.innerHTML = '';
  let localStorageBooks = [];
  localStorageBooks = JSON.parse(localStorage.getItem('books')) !== null ? (localStorageBooks = JSON.parse(localStorage.getItem('books'))) : [];

  localStorageBooks.forEach((book) => {
    const bookTemplate = `
            <div class="book-item">
              <p>"${book.title}" by ${book.author}</p>
              <button type="button" class="remove" id="${book.id}">Remove</button>
            </div>
        `;
    booksContainer.innerHTML += bookTemplate;
  });
  return booksContainer;
};

export default showBooks;
