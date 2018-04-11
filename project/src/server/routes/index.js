const express = require('express');

const route = express.Router();

route.use('/api', require('./product'), require('./posts'));

module.exports = route;