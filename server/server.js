const express = require('express');
const con1 = require('./controllers/con1.js')
const config = require('./../config.js')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

app.get('/api/books/toread', con1.getBooksToRead);
app.get('/api/books/iveread', con1.getBooksIveRead);
app.post('/api/books/toread', con1.createBookToRead);
app.post('/api/books/iveread', con1.createBookHaveRead);
app.put('/api/books/toread/:id', con1.updateBookToRead)
app.put('/api/books/iveread/:id', con1.updateBookHaveRead)
app.delete('/api/books/toread/:id', con1.deleteBookToRead);
app.delete('/api/books/iveread/:id', con1.deleteBookHaveRead);


const {port} = config;
app.listen(port, () => console.log('I am running on port ' + port));