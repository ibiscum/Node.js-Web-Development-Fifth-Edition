// Uncomment this section for synchronous Fibonacci
// import { fibonacci } from './math.js';

// for (var num = 1; num < 50; num++) {
//     let now = new Date().toISOString();
//     console.log(`${now} Fibonacci for ${num} = ${fibonacci(num)}`);
// }

// Uncomment this section for an efficient synchronous Fibonacci
// import { fibonacciLoop } from './math.js';

// for (var num = 1; num < 100; num++) {
//     let now = new Date().toISOString();
//     console.log(`${now} Fibonacci for ${num} = ${fibonacciLoop(num)}`);
// }

// Uncomment this section for an asynchronous Fibonacci
// import { fibonacciAsync } from './math.js';

// (async () => {
//     for (var num = 1; num < 8000; num++) {
//         await new Promise((resolve, reject) => {
//             fibonacciAsync(num, (err, fibo) => {
//                 if (err) reject(err);
//                 else {
//                     let now = new Date().toISOString();
//                     console.log(`${now} Fibonacci for ${num} = ${fibo}`);
//                     resolve();
//                 }
//             })
            
//         })
//     }
// })().catch(err => { console.error(err); });

// Uncomment this for an asynchronous Fibonacci
import { fibonacciAwait } from './math.js';
(async () => {
    for (var num = 1; num < 8000; num++) {
        let fibo = await fibonacciAwait(num);
        let now = new Date().toISOString();
        console.log(`${now} Fibonacci for ${num} = ${fibo}`);
    }
})().catch(err => { console.error(err); });