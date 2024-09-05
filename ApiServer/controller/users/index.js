const { getDataFromRequest, handleMessage } = require('../../ultis/index.js');
const { httpStatusCode, urlAPI } = require('../../constants.js');

async function getUsers(request, response) {
	response.writeHead(httpStatusCode.OK, { 'Content-Type': 'application/json' });
	response.end('Get User');
}

async function addUser(request, response) {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/users`, {
		method: 'POST',
		body: JSON.stringify(body),
	});
	if (!result.ok) {
		throw new Error('Network result was not ok');
	} else {
		response.writeHead(httpStatusCode.OK, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(await result.json()));
	}
}

async function loginUser(request, response) {
	const body = await getDataFromRequest(request);
	let message = '';
	const result = await fetch(`${urlAPI}/api/users/login`, {
		method: 'POST',
		body: JSON.stringify(body),
	});
	if (result.ok) {
		response.writeHead(httpStatusCode.OK, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(await result.json()));
	} else {
		message = 'User not found';
		handleMessage(message, response);
	}
}

async function logoutUser(request, response) {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/users/logout`, {
		method: 'DELETE',
		body: JSON.stringify(body),
	});
	if (!result.ok) {
		throw new Error('Network result was not ok');
	} else {
		response.writeHead(httpStatusCode.OK, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(await result.json()));
	}
}

module.exports = {
	getUsers,
	addUser,
	loginUser,
	logoutUser,
};
