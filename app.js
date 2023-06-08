const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', require('./routes/users'));
app.use('/api/employees', require('./routes/employees'));
// app.use('/api/products', require('./routes/products'));
// app.use('/api/services', require('./routes/services'));
// app.use('/api/articles', require('./routes/articles'));

module.exports = app;
