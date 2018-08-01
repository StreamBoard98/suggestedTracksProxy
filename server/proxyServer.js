const express = require('express');
const path = require('path');

const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use('/songs/:id', express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '../public')));


app.listen(2000, () => console.log('Proxy server conected on 2000'));

/*when the proxy receives a get request from /songs/:id
it triggers a get request in the each of the four components
*/
