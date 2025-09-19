import { Router } from 'express';
const router = Router();

import { fibonacciAwait } from '../math';

router.get('/', function(req, res) {
  if (req.query.fibonum) {
    // Calculate using async-aware function, in this server
    fibonacciAwait(req.query.fibonum)
    .then(fiboval => {
      console.log(`fibonacciAwait ${req.query.fibonum} => ${fiboval}`);
      res.render('fibonacci', {
        title: "Calculate Fibonacci numbers",
        fibonum: req.query.fibonum,
        fiboval: fiboval
      });
    })
    .catch(err => {
      console.error(err);
    });
  } else {
    res.render('fibonacci', {
      title: "Calculate Fibonacci numbers",
      fiboval: undefined
    });
  }
});

export default router;
