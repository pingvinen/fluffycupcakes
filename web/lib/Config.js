#!/usr/bin/env node
var altapay = require("../modules/altapay/index").AltaPayConfig;

function Config() {
	"use strict";

	this.altapay = new altapay();
}

module.exports = Config;
