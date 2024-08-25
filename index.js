const createServer = require('http').createServer;
const port = 3001;

const server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.end()
    }

    // router.run(req, res);
});

server.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});