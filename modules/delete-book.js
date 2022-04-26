import showBooks from './show-books.js';

const deleteBook = (e) => {
  if (e.target.classList.contains('remove')) {
    const id = e.target.attributes.id.value;
    const filteredBooks = JSON.parse(localStorage.getItem('books')).filter(
      (book) => book.id !== +id,
    );
    localStorage.setItem('books', JSON.stringify(filteredBooks));
    showBooks();
  }
};

export default deleteBook;
