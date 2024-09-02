const { getDataFromRequest } = require('../../ultis/index.js');
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

function updateUsers(req, res) {
	res.end('Update User Succesfully');
}
function deleteUsers(req, res) {
	res.end(JSON.stringify({ message: 'Delete User Succesfully' }));
}
const loginUser = async (request, response) => {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/users/login`, {
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
};

const logoutUser = async (request, response) => {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/users/logout`, {
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
};

module.exports = {
	getUsers,
	addUser,
	updateUsers,
	deleteUsers,
	loginUser,
	logoutUser,
};
