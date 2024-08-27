const {
	loginUserModel,
	logoutUserModel,
	getUsersModel,
	addUserModel,
	checkUserExistModel,
} = require('../../model/usersModel.js');
const { getBodyDataRequest,
		checkAuthorizationHeaders,
		handleMessage,
} = require('../../ultis/index.js');
const { httpStatusCode } = require('../../constants.js');

const getUsers = async (request, response) => {
	const users = await getUsersModel()
	response.writeHead(httpStatusCode.OK, {
		'Content-Type': 'application/json',
	});
	response.end(JSON.stringify(users));
}
const addUser = async (request, response) => {
	const body = await getBodyDataRequest(request);
	let data = {
		...body,
		token: token,
	};
	const message = await addUserModel(data);
	handleMessage(message);
}
function updateUsers(request, response) {
	response.end('Update User Succesfully');
}
function deleteUsers(request, response) {
	response.end(JSON.stringify({ message: 'Delete User Succesfully' }));
}
const loginUser = async (request, response) => {
	const body = await getBodyDataRequest(request);
	let data = {
	  ...body,
	  token: token,
	};
	const message = await loginUserModel(data);
	handleMessage(message);
};
const logoutUser = async (request, response) => {
	const body = await getBodyDataRequest(request);
	let data = {
	  ...body,
	  token: token,
	};
	const message = await logoutUserModel(data);
	handleMessage(message);
};

module.exports = {
	getUsers,
	addUser,
	updateUsers,
	deleteUsers,
	loginUser,
	logoutUser,
};
