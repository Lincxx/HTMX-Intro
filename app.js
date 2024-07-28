import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';

import BOOKS_DATA from './data/data.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});

app.post('/books', (req, res) => {

  const { title, author } = req.body;
  const id = Math.random().toString();
  const book = { id, title, author };
  BOOKS_DATA.push(book);
  

  res.redirect(`/books/${id}`);
});


app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find(book => book.id === id);
  //console.log(book)
  
  res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = BOOKS_DATA.findIndex(book => book.id === id);
  BOOKS_DATA.splice(bookIndex, 1);

  res.send();  
})

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const newBook = { id, title, author };
  const bookIndex = BOOKS_DATA.findIndex(book => book.id === id);
  BOOKS_DATA[bookIndex] = newBook;
  res.send(createBookTemplate(newBook));
})

app.get('/books/edit/:id', (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find(book => book.id === id);
  res.send(createEditFormTemplate(book));
})

app.post('/books/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  const filteredBooks = BOOKS_DATA.filter((b) => b.title.toLocaleLowerCase().includes(text));
  
  res.send(createListTemplate(filteredBooks));
  
})

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});