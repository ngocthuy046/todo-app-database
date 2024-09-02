const { httpStatusCode } = require('../../constants.js');
const {
	loginUserModel,
	logoutUserModel,
	checkToken,
} = require('../../models/usersModel.js');
const {
	getDataFromRequest,

	handleMessage,
} = require('../../ultis/index.js');

async function getUsers(request, response) {}
async function addUser(request, response) {
	const body = await getDataFromRequest(request);
	const message = await addUser(body);
	handleMessage(message, response);
}

async function checkTokenIsValid(request, response) {
	const body = await getDataFromRequest(request);
	const message = await checkToken(body.user_id, body.token);
	if (message === 'Token is valid') {
		response.writeHead(httpStatusCode.OK, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else if (message === 'Token is not valid') {
		response.writeHead(httpStatusCode.UNAUTHORIZED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	}
	// handleMessage(message, response);
}
// FE : body {email,password} => API server: request(body) => fetch (method post, body) => database (body: email,password)
async function loginUser(request, response) {
	const body = await getDataFromRequest(request);
	const message = await loginUserModel(body);
	// message = user
	if (message !== 'User not found') {
		response.writeHead(httpStatusCode.OK, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	} else {
		response.writeHead(httpStatusCode.NOT_FOUND, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(message));
	}
}
async function logoutUser(request, response) {
	const body = await getDataFromRequest(request);
	const message = await logoutUserModel(body);
	handleMessage(message, response);
}

module.exports = {
	getUsers,
	addUser,
	loginUser,
	logoutUser,
	checkTokenIsValid,
};
