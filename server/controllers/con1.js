let bookList = [];
let id = 0;


module.exports={
    test: (req, res) => {
        console.log(req)
        res.status(200).send("Yeah!")
    },
    createBook: (req, res) => {
        bookList.push({author: req.body.author, pages: req.body.pages, year: req.body.year, title: req.body.title})

    }
}