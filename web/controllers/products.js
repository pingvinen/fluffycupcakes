#!/usr/bin/env node
var config = require('./../config/config');

var ProductRepository = require('./../lib/ProductRepository');
var repos = new ProductRepository();

module.exports = function(req, res) {
	"use strict";
	res.render('products/products', { title: 'Products', products: repos.getAll() });
};
