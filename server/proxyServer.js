// var http = require('http'),
//     httpProxy = require('http-proxy');
// //
// // Create your proxy server and set the target in the options.
// //
// httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(4001); // See (†)
 
// //
// // Create your target server
// //
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// }).listen(9000);

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();


app.listen(2000, () => console.log('Proxy server conected on 2000'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

console.log(path.join(__dirname, '../client/dist'));
