const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db');
let userController = require('./controllers/userController');

let app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(8080, ()=> console.log('Server Started on Port 8080'));

app.use('/users', userController);