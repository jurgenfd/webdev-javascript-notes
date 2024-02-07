var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//connect to DB
const dbconnection = require('./model/database');
require('./model/game');

var indexRouter = require('./routes/index');
var gameRouter = require('./routes/game');
var actionsRouter = require('./routes/actions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(dbconnection);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//add api routers
//prefix inside router
app.use('/', gameRouter);
app.use('/', actionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({ message: 'endpoint not found' });
});

module.exports = app;
