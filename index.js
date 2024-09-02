const createServer = require('http').createServer;
const router = require('./routers/index.js');
const port = 3001;
const { METHODS } = require('./constants');
const server = createServer(function setServerResonseHeaders(
	request,
	response
) {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader(
		'Access-Control-Allow-Methods',
		'GET,PUT,POST,DELETE,PATCH'
	);
	response.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization'
	);

	if (request.method === METHODS.OPTIONS) {
		response.end();
	}

	router.run(request, response);
});

server.listen(port, function serverListening() {
	console.log(`Listening on localhost:${port}`);
});
