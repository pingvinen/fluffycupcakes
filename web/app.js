#!/usr/bin/env node

var debug = require('debug')('my-application');
var path = require('path');
var express = require('express');
var app = express();
var config = require('./config/config.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


var routes = require('./routes');

app.use(function(req, res, next) {
	"use strict";
	console.log(req.method, req.url, req.headers);
	next();
});
app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
	"use strict";
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		"use strict";
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	"use strict";
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

/*
app.get('/hello.world', function(req, res) {
	"use strict";
	var d = new Date();
	res.send('Hello World at '+ d.getHours() +':'+ d.getMinutes()+':'+ d.getSeconds());
});
*/

var server = app.listen(3000, function() {
	"use strict";
	console.log('Listening on port', server.address().port);
})
