const fs = require('fs');
const { httpStatusCode } = require('../constants.js');

const writeDataToFile = (fileName, data) => {
	fs.writeFileSync(fileName, data, 'utf-8', (error) => console.log(error));
};

const getDataFromRequest = (req) => {
	return new Promise((resolve, reject) => {
		let body = '';
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', () => {
			resolve(JSON.parse(body));
		});
	});
};

const generateUID = () => {
	return Date.now().toString(36) + Math.random().toString(36).substring(2, 11);
};

const checkAuthorizationHeaders = (request) => {
	const token = request.headers['authorization'];
	if (!token) {
		response.writeHead(httpStatusCode.UNAUTHORIZED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify({ message: 'NO TOKENNNNNN' }));
	} else {
		return token;
	}
};

const getBodyDataRequest = async (request) => {
	const body = await getDataFromRequest(request);
	if (!body) {
		response.writeHead(httpStatusCode.ERROR, {
			'Content-Type': 'application/json',
		});
		response.end(
			JSON.stringify({ message: 'No Data received to delete task' })
		);
	} else {
		return body;
	}
};

const handleMessage = (message) => {
	if (message === 'Success') {
		response.writeHead(httpStatusCode.NO_CONTENT, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Token is not valid') {
		response.writeHead(httpStatusCode.UNAUTHORIZED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Task not found') {
		response.writeHead(httpStatusCode.NOT_FOUND, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'User not found') {
		response.writeHead(httpStatusCode.NOT_FOUND, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	}
};

module.exports = {
	getBodyDataRequest,
	generateUID,
	writeDataToFile,
	checkAuthorizationHeaders,
	handleMessage,
};
