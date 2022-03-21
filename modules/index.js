import BookList from './booklist.js';
import { DateTime } from './luxon/src/luxon.js';

const book = new BookList();
document.getElementById('form').addEventListener('submit', book.add);
book.loadScreen();

document.getElementById('date-time').innerHTML = DateTime.now();

const list = document.getElementById('book-section');
const addNew = document.getElementById('add-book');
const contact = document.getElementById('contact-section');

document.getElementById('list').addEventListener('click', () => {
  if (!list.classList.contains('show')) {
    list.classList.replace('hide', 'show');
    addNew.classList.replace('show', 'hide');
    contact.classList.replace('show', 'hide');
  }
});
document.getElementById('add-b').addEventListener('click', () => {
  if (!addNew.classList.contains('show')) {
    list.classList.replace('show', 'hide');
    addNew.classList.replace('hide', 'show');
    contact.classList.replace('show', 'hide');
  }
});
document.getElementById('contact-a').addEventListener('click', () => {
  if (!contact.classList.contains('show')) {
    list.classList.replace('show', 'hide');
    addNew.classList.replace('show', 'hide');
    contact.classList.replace('hide', 'show');
  }
});