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
	handleMessage(message, response);
}

async function loginUser(request, response) {
	const body = await getDataFromRequest(request);
	const message = await loginUserModel(body);
	handleMessage(message, response);
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
