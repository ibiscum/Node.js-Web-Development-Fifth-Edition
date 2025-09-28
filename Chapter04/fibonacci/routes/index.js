import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(res) {
  res.render('index', { title: "Welcome to the Fibonacci Calculator" });
});

router.get('/error', function(next) {
    next({
        status: 404,
        message: "Fake error"
    });
});
  
export default router;
