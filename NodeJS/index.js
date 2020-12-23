const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

const { mongoose } = require('./app');
var userRouter = require('./controllers/userControllers');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000, () => console.log('Server started'));

app.use('/users',userRouter);