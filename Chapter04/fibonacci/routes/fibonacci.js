import { Router } from 'express'; 
const router = Router(); 
 
import { fibonacci } from '../math'; 
router.get('/', function(req, res) { 
  if (req.query.fibonum) { 
    // Calculate directly in this server 
    res.render('fibonacci', { 
      title: "Calculate Fibonacci numbers", 
      fibonum: req.query.fibonum, 
      fiboval: fibonacci(req.query.fibonum) 
    }); 
  } else { 
    res.render('fibonacci', { 
      title: "Calculate Fibonacci numbers", 
      fiboval: undefined 
    }); 
  } 
}); 
 
export default router; 
