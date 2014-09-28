#!/usr/bin/env node

var express = require('express');
var router = express.Router();
var config = require('./config/config');

router.get('/', require('./controllers/index'));
router.get('/products', require('./controllers/products'));
router.get('/_altapay/callback', require('./controllers/_altapay/callback'));

module.exports = router;
