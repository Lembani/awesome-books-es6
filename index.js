import addBook from './modules/add-book.js';
import showBooks from './modules/show-books.js';
import deleteBook from './modules/delete-book.js';

import { DateTime } from './modules/luxon.js';

const addBtn = document.getElementById('addBtn');
const booksContainer = document.querySelector('.booksContainer');

const dateTimeContainer = document.querySelector('.date-time');
const dateTime = DateTime.utc().toLocaleString(DateTime.DATETIME_FULL);
dateTimeContainer.textContent = dateTime;

addBtn.addEventListener('click', addBook);
booksContainer.addEventListener('click', deleteBook);

document.addEventListener('DOMContentLoaded', showBooks);

const bookListLink = document.getElementById('bookListLink');
const addBookLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');

const bookListSection = document.getElementById('bookList');
const addBookSection = document.getElementById('addBook');
const contactSection = document.getElementById('contact');

bookListSection.style.display = 'block';
addBookSection.style.display = 'none';
contactSection.style.display = 'none';

bookListLink.addEventListener('click', () => {
  bookListSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBookLink.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
});
