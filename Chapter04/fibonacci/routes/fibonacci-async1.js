import { Router } from 'express';
const router = Router();

import { fibonacciAsync } from '../math';

router.get('/', function(req, res, next) {
  if (req.query.fibonum) {
    // Calculate using async-aware function, in this server
    fibonacciAsync(req.query.fibonum, (err, fiboval) => {
        if (err) next(err);
        else {
            res.render('fibonacci', {
                title: "Calculate Fibonacci numbers",
                fibonum: req.query.fibonum,
                fiboval: fiboval
            });
        }
    });
  } else {
    res.render('fibonacci', {
      title: "Calculate Fibonacci numbers",
      fiboval: undefined
    });
  }
});

export default router;
