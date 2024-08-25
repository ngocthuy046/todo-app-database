const {
	loginUserModel,
	logoutUserModel,
	getUsersModel,
	addUserModel,
	checkUserExistModel,
} = require('../../model/usersModel.js');
const { getDataFromRequest } = require('../../ultis/index.js');
const { httpStatusCode } = require('../../constants.js');

async function getUsers(request, response) {
	const users = await getUsersModel();
	response.writeHead(httpStatusCode.OK, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(users));
}
async function addUser(request, response) {
	const body = await getDataFromRequest(request);
	if (!body) {
		response.writeHead(httpStatusCode.ERROR, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify({ message: 'No Data received to add task' }));
	} else {
		const isValid = await checkUserExistModel(body);
		if (isValid) {
			response.writeHead(httpStatusCode.OK, {
				'Content-Type': 'application/json',
			});
			response.end(JSON.stringify('Already have this email registered!'));
		} else {
			const message = await addUserModel(body);
			if (message) {
				response.writeHead(httpStatusCode.OK, {
					'Content-Type': 'application/json',
				});
				response.end(JSON.stringify('Add user successfully!'));
			}
		}
	}
}
function updateUsers(request, response) {
	response.end('Update User Succesfully');
}
function deleteUsers(request, response) {
	response.end(JSON.stringify({ message: 'Delete User Succesfully' }));
}
const loginUser = async (request, response) => {
	const body = await getDataFromRequest(request);
	if (!body) {
		response.writeHead(httpStatusCode.ERROR, {
			'Content-Type': 'application/json',
		});
		response.end(
			JSON.stringify({
				message: 'No Data received to login',
			})
		);
	} else {
		const result = await loginUserModel(body);
		if (result) {
			response.writeHead(httpStatusCode.OK, {
				'Content-Type': 'application/json',
			});
			response.end(JSON.stringify(result));
		} else {
			response.writeHead(httpStatusCode.OK, {
				'Content-Type': 'application/json',
			});
			response.end(JSON.stringify('Wrong user or password'));
		}
	}
};

const logoutUser = async (request, response) => {
	const body = await getDataFromRequest(request);
	if (!body) {
		response.writeHead(httpStatusCode.ERROR, {
			'Content-Type': 'application/json',
		});
		response.end(
			JSON.stringify({
				message: 'No Data received to logout',
			})
		);
	} else {
		const result = await logoutUserModel(body);
		if (result) {
			response.writeHead(httpStatusCode.OK, {
				'Content-Type': 'application/json',
			});
			response.end(JSON.stringify(result));
		} else {
			response.writeHead(httpStatusCode.OK, {
				'Content-Type': 'application/json',
			});
			response.end(JSON.stringify('Wrong user or password'));
		}
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
