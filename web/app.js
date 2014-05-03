var http = require('http');

http.createServer(function (req, res) {
	console.log('incoming request: '+req.method+' '+req.url);
	console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var x = new Date();
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    var time = x.getHours()+':'+x.getMinutes()+':'+x.getSeconds();

    res.end('Fluffy Cupcakes welcomes you to the island on this lovely '+ days[x.getDay()] +' at '+ time +'\n');
}).listen(3000, "127.0.0.1");


console.log('Server running at http://127.0.0.1:3000/');
