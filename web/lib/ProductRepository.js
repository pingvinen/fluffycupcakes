#!/usr/bin/env node
var Product = require('./Product');

var prod1 = new Product();
prod1.id = "prod1";
prod1.title = "Red";
prod1.price = 14.95;

var prod2 = new Product();
prod2.id = "prod2";
prod2.title = "Green";
prod2.price = 13.37;

var prod3 = new Product();
prod3.id = "prod3";
prod3.title = "Blue";
prod3.price = 0.99;


var products = [prod1, prod2, prod3];




var ProductRepository = function() {
	"use strict";
}

var proto = ProductRepository.prototype;

proto.getById = function(id) {
	"use strict";

	for (var x in products) {
		if (products[x].id === id) {
			return products[x];
		}
	}

	return null;
};

proto.getAll = function() {
	"use strict";

	return products;
};


module.exports = ProductRepository;
