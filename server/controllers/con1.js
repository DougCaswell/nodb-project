let bookListToRead = [];
let uniqueId = 0;
let bookListHaveRead = [];


module.exports={
    getBooksToRead: (req, res) => {
        res.status(200).send(bookListToRead)
    },
    getBooksIveRead: (req, res) => {
        res.status(200).send(bookListHaveRead)
    },
    createBookToRead: (req, res) => {
        bookListToRead.push({author: req.body.author, pages: req.body.pages, title: req.body.title, id: uniqueId});
        uniqueId++;
        res.status(200).send(bookListToRead);
    },
    createBookHaveRead: (req, res) => {
        bookListHaveRead.push({author: req.body.author, pages: req.body.pages, title: req.body.title, id: uniqueId});
        uniqueId++;
        res.status(200).send(bookListHaveRead);
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
    updateBookHaveRead: (req, res) => {
        const bookIndex = bookListHaveRead.findIndex(book => book.id === +req.params.id);
        let newBook = bookListHaveRead[bookIndex];
        bookListHaveRead[bookIndex] = {
            id: newBook.id,
            title: req.body.title || newBook.title,
            author: req.body.author || newBook.author,
            pages: req.body.pages || newBook.pages,
        }
        res.status(200).send(bookListHaveRead);
    },
    deleteBookToRead: (req, res) => {
        const bookIndex = bookListToRead.findIndex(book => book.uniqueId === +req.params.id);
        bookListToRead.splice(bookIndex, 1);
        res.status(200).send(bookListToRead);
    },
    deleteBookHaveRead: (req, res) => {
        const bookIndex = bookListHaveRead.findIndex(book => book.uniqueId === +req.params.id);
        bookListHaveRead.splice(bookIndex, 1);
        res.status(200).send(bookListHaveRead);
    },
    
    //Need Update Method

}