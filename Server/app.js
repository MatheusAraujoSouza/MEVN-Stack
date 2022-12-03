var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cryptoRouter = require('./routes/crypto');

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
const verifyAcessToken = require('./routes/middleware/verifyAcessTokenMiddleware')
app.use('/users', usersRouter);
app.use('/crypto', cryptoRouter);
app.use('/',verifyAcessToken, indexRouter);


module.exports = app;
