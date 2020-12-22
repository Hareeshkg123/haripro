const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./app');
var userRouter = require('./router/userRouter');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started'));

app.use('/users',userRouter);