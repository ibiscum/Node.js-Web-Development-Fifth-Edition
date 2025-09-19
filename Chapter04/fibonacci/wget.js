import { request } from 'http';
import { parse } from 'url';
import { inspect } from 'util';

const argUrl = process.argv[2];
const parsedUrl = parse(argUrl, true);

// The options object is passed to http.request
// telling it the URL to retrieve
const options = {
  host: parsedUrl.hostname,
  port: parsedUrl.port,
  path: parsedUrl.pathname,
  method: 'GET'
};

if (parsedUrl.search) options.path += `?${parsedUrl.search}`;

const req = request(options);
// Invoked when the request is finished
req.on('response', res => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${inspect(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', chunk => { console.log(`BODY: ${chunk}`); });
  res.on('error', err => {  console.log(`RESPONSE ERROR: ${err}`); });
});
// Invoked on errors
req.on('error', err => { console.log(`REQUEST ERROR: ${err}`); });
req.end();
