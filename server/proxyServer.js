const express = require('express');
const path = require('path');

const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use('/songs/:id', express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public')));


app.listen(2332, () => console.log('Proxy server conected on 2332'));
