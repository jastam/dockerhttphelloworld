const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from ' + os.hostname() + '\n');
});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.on('error', (e) => {
	console.log(e);
});

server.on('listening', (e) => {
	console.log('Weberver is listening');
});

server.on('close', (e) => {
	console.log('Weberver is stopped');
});

server.listen(80);


process.on('SIGTERM', () =>  {
	server.close();
});
