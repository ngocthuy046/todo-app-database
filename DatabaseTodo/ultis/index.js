const fs = require('fs');
const { httpStatusCode } = require('../constants.js');

function writeDataToFile(fileName, data) {
	fs.writeFileSync(fileName, data, 'utf-8', (error) => console.log(error));
}

function getDataFromRequest(request) {
	return new Promise((resolve, reject) => {
		let body = '';
		request.on('data', (chunk) => {
			body += chunk.toString();
		});
		request.on('end', () => {
			resolve(JSON.parse(body));
		});
	});
}

function generateUID() {
	return Date.now().toString(36) + Math.random().toString(36).substring(2, 11);
}

function checkAuthorizationHeaders(request) {
	const token = request.headers['authorization'];
	if (!token) {
		response.writeHead(httpStatusCode.UNAUTHORIZED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify({ message: 'NO TOKENNNNNN' }));
	} else {
		return token;
	}
}

function handleMessage(message, response) {
	if (message === 'Success') {
		response.writeHead(httpStatusCode.NO_CONTENT, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Token is valid') {
		response.writeHead(httpStatusCode.OK, {
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
	} else if (message === 'Add task success') {
		response.writeHead(httpStatusCode.CREATED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Logout success') {
		response.writeHead(httpStatusCode.NO_CONTENT, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Register success') {
		response.writeHead(httpStatusCode.CREATED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Delete task success') {
		response.writeHead(httpStatusCode.NO_CONTENT, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Edit task success') {
		response.writeHead(httpStatusCode.NO_CONTENT, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Toggle task success') {
		response.writeHead(httpStatusCode.NO_CONTENT, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Delete all tasks success') {
		response.writeHead(httpStatusCode.NO_CONTENT, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'User not found') {
		response.writeHead(httpStatusCode.NOT_FOUND, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Data is missing') {
		response.writeHead(httpStatusCode.NOT_FOUND, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	}
}

module.exports = {
	getDataFromRequest,
	generateUID,
	writeDataToFile,
	checkAuthorizationHeaders,
	handleMessage,
};
