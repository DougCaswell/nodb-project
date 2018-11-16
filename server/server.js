const express = require('express');
const controller = require('./controllers/con1.js')

const app = express();

app.get('/api/books', controller.test)



const port = 3540;
app.listen(port, () => console.log('I am running on port ' + port))