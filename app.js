var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
<<<<<<< HEAD
var logger = require('morgan');
var ConvertApi = require('convertapi-js');
=======

var ConvertApi = require('convertapi-js');

>>>>>>> 60a510b94a8da1c3b51133d08481f1cedd1ac895
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

<<<<<<< HEAD
app.use(logger('dev'));
=======
//app.use(logger('dev'));
>>>>>>> 60a510b94a8da1c3b51133d08481f1cedd1ac895
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
