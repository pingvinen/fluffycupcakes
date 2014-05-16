#!/usr/bin/env node
var config = require('./../config/config');

module.exports = function(req, res) {
	"use strict";
	res.render('index', { title: null, config: config });
};
