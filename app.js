'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');   // jshint ignore:line
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/bower', express.static(path.join(__dirname, 'bower_components')));
app.use('/r', function(req, res){
	fs.createReadStream(path.join(__dirname, 'public', 'index.html')).pipe(res);
});
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.send('<html><body><pre>\nError ' + err.message + '\n\n' + err + '</pre></body></html>');
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.send('<html><body><pre></pre>' + err.message + '</body></html>');
});


module.exports = app;
