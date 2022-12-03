var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cors = require('cors')
const mongoose = require('mongoose')
var app = express();


mongoose.connect('',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection OK")
}).catch((err)=>{
    console.log(err)
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
