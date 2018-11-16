let bookList = [];
let id = 0;


module.exports={
    test: (req, res) => {
        console.log(req)
        res.status(200).send("Yeah!")
    },
    createBook: (req, res) => {
        bookList.push({author: req.body.author, pages: req.body.pages, title: req.body.title, id: id});
        id++;
    }

    //Need Read Method
    
    //Need Delete Method

    //Need Update Method

    //Make sure I use different methods of passing in input
}