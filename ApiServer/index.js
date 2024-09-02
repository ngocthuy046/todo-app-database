const router = require('./router/index.js');
const createServer = require('http').createServer;
const port = 3000;

const server = createServer((req, res) => {
	// Config cors to allow fetch data from front to back
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Replace with specific origin if needed
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH'); // Adjust methods as needed
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	/**
	 * need to check method options because of preflight response
	 * https://stackoverflow.com/questions/45395174/fetch-respond-to-preflight-response
	 * */

	if (req.method === 'OPTIONS') {
		res.end();
	}

	router.run(req, res);
});

// Starts a simple HTTP server locally on port 3000
server.listen(port, () => {
	console.log(`Listening on localhost:${port}`);
});

// Run with `node server.js`
