const express = require('express');
const con1 = require('./controllers/con1.js')
const config = require('./../config.js')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

app.get('/api/books', con1.test);



const {port} = config;
app.listen(port, () => console.log('I am running on port ' + port));