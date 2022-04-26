import showBooks from './show-books.js';

const { bookForm } = document.forms;
const { title } = bookForm;
const { author } = bookForm;

const addBook = (e) => {
  e.preventDefault();

  let books;

  books = JSON.parse(localStorage.getItem('books')) !== null ? (books = JSON.parse(localStorage.getItem('books'))) : [];

  const book = {
    id: 0,
    title: '',
    author: '',
  };

  if (title.value === '' || author.value === '') {
    return false;
  }

  book.title = title.value;
  book.author = author.value;
  book.id = books.length + 1;
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  title.value = '';
  author.value = '';
  showBooks();
  return true;
};

export default addBook;
