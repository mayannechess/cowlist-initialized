const express = require('express')
const db = require('./db');

const morgan = require('morgan');
const parser = require('body-parser');

const router = require('./routes.js');

const app = express();
const port = 3000

// middleware

app.use(morgan('dev'));
app.use(parser.json());


//connect to routes

app.use('/api', router);


app.use(express.static('./client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));