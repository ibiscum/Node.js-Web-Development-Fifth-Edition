import createError from 'http-errors';
import express from 'express';
import { registerPartials } from 'hbs';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
// const usersRouter = require('./routes/users');
// const fibonacciRouter = require('./routes/fibonacci');
// const fibonacciRouter = require('./routes/fibonacci-async1');
// const fibonacciRouter = require('./routes/fibonacci-await');
import fibonacciRouter from './routes/fibonacci-rest';

const app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
registerPartials(join(__dirname, 'partials'));

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(join(__dirname, 'public'));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/fibonacci', fibonacciRouter);

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

export default app;
