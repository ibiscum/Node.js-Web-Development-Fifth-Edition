import { Router } from 'express';
const router = Router();
import { request } from 'http';
//import math from '../math';

router.get('/', function (req, res, next) {
    if (req.query.fibonum) {
        var httpreq = request({
            host: "localhost",
            port: process.env.SERVERPORT,
            path: `/fibonacci/${Math.floor(req.query.fibonum)}`,
            method: 'GET'
        });
        httpreq.on('response', (response) => {
            response.on('data', (chunk) => {
                var data = JSON.parse(chunk);
                res.render('fibonacci', {
                    title: "Calculate Fibonacci numbers",
                    fibonum: req.query.fibonum,
                    fiboval: data.result
                });
            });
            response.on('error', (err) => { next(err); });
        });
        httpreq.on('error', (err) => { next(err); });
        httpreq.end();
    } else {
        res.render('fibonacci', {
            title: "Calculate Fibonacci numbers",
            fiboval: undefined
        });
    }
});

export default router;
