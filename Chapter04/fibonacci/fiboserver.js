import { fibonacciAsync } from './math.js';
import express from 'express';
import logger from 'morgan';

const app = express();
app.use(logger('dev'));
app.get('/fibonacci/:n', (req, res, next) => {
    fibonacciAsync(Math.floor(req.params.n), (err, val) => {
        if (err) next(`FIBO SERVER ERROR ${err}`);
        else {
            res.send({
                n: req.params.n,
                result: val
            });
        }
    });
});

app.listen(process.env.SERVERPORT);
