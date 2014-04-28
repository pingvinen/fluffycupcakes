var http = require('http');

http.createServer(function (req, res) {
	console.log('incoming request');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Fluffy Cupcakes welcomes you to the island\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
