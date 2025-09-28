import createError from 'http-errors';
import express from 'express';
import hbs from 'hbs';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import logger from 'morgan';

import indexRouter from './routes/index.js';
// const usersRouter = require('./routes/users');
import fibonacciRouter from './routes/fibonacci.js';
// const fibonacciRouter = require('./routes/fibonacci-async1');
// const fibonacciRouter = require('./routes/fibonacci-await');
// import fibonacciRouter from './routes/fibonacci-rest.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(join(__dirname, 'partials'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/fibonacci', fibonacciRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
