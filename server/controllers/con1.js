const axios = require('axios')
const config = require('./../../config.js')
let bookListToRead = [];
let uniqueId = 0;
let bookListIveRead = [];
const {key} = config;

module.exports={
    findBooks: (req, res1) => {
        let promise = axios.get(`https://www.googleapis.com/books/v1/volumes?q=+subject:${req.body.title}&maxResults=20&key=${key}`)
        promise.then(res => {
            res1.status(200).send(res.data)
        })
    },
    getBooksToRead: (req, res) => {
        res.status(200).send(bookListToRead)
    },
    getBooksIveRead: (req, res) => {
        res.status(200).send(bookListIveRead)
    },
    createBookToRead: (req, res) => {
        bookListToRead.push({author: req.body.author, pages: req.body.pages, title: req.body.title, id: uniqueId});
        uniqueId++;
        res.status(200).send(bookListToRead);
    },
    createBookIveRead: (req, res) => {
        bookListIveRead.push({author: req.body.author, pages: req.body.pages, title: req.body.title, id: uniqueId});
        uniqueId++;
        res.status(200).send(bookListIveRead);
    },
    updateBookToRead: (req, res) => {
        const bookIndex = bookListToRead.findIndex(book => book.id === +req.params.id);
        let newBook = bookListToRead[bookIndex];
        bookListToRead[bookIndex] = {
            id: newBook.id,
            title: req.body.title || newBook.title,
            author: req.body.author || newBook.author,
            pages: req.body.pages || newBook.pages,
        }
        res.status(200).send(bookListToRead);
    },
    updateBookIveRead: (req, res) => {
        const bookIndex = bookListIveRead.findIndex(book => book.id === +req.params.id);
        let newBook = bookListIveRead[bookIndex];
        bookListIveRead[bookIndex] = {
            id: newBook.id,
            title: req.body.title || newBook.title,
            author: req.body.author || newBook.author,
            pages: req.body.pages || newBook.pages,
        }
        res.status(200).send(bookListIveRead);
    },
    deleteBookToRead: (req, res) => {
        const bookIndex = bookListToRead.findIndex(book => book.id === +req.params.id);
        bookListToRead.splice(bookIndex, 1);
        res.status(200).send(bookListToRead);
    },
    deleteBookIveRead: (req, res) => {
        const bookIndex = bookListIveRead.findIndex(book => book.id === +req.params.id);
        bookListIveRead.splice(bookIndex, 1);
        res.status(200).send(bookListIveRead);
    },
    
    //Need Update Method

}