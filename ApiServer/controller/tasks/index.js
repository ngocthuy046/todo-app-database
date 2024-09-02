const { getDataFromRequest, handleMessage } = require('../../ultis/index.js');
const { httpStatusCode, urlAPI } = require('../../constants.js');
const { METHODS } = require('../../constants');
// Fixed to integrate with node DBserver
async function addTask(request, response) {
	const body = await getDataFromRequest(request);
	const token = checkAuthorizationHeaders(request);
	let message;
	let dataToCheckToken = {
		user_id: body.user_id,
		token: token,
	};
	const tokenIsValid = await fetch(`${urlAPI}'/api/users/check-token'`, {
		method: METHODS.POST,
		body: JSON.stringify(dataToCheckToken),
	});
	if (tokenIsValid.ok) {
		const result = await fetch(`${urlAPI}/api/tasks`, {
			method: METHODS.POST,
			body: JSON.stringify(body),
		});
		message = await result.text();
		handleMessage(message, response);
	} else {
		message = await tokenIsValid.text();
		handleMessage(message, response);
	}
}
// getTasks: not fix | remember change to getAllTasks
async function getTasks(request, response) {
	const result = await fetch(`${urlAPI}/api/tasks`, {
		method: 'GET',
		headers: {
			Authorization: JSON.stringify(request.headers['authorization']),
		},
	});
	if (!result.ok) {
		throw new Error('Network result was not ok');
	} else {
		response.writeHead(httpStatusCode.ACCEPTED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(await result.json()));
	}
}
// deleteTask: not fix
async function deleteTask(request, response) {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/tasks`, {
		method: 'DELETE',
		headers: {
			Authorization: JSON.stringify(request.headers['authorization']),
		},
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
// deleteAllTasks: not fix
async function deleteAllTasks(request, response) {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/tasks/delete-all-tasks`, {
		method: 'DELETE',
		headers: {
			Authorization: JSON.stringify(request.headers['authorization']),
		},
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
// editTask: not fix
async function editTask(request, response) {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/tasks`, {
		method: 'PUT',
		headers: {
			Authorization: JSON.stringify(request.headers['authorization']),
		},
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
// toggleTask: not fix
async function toggleTask(request, response) {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/tasks/toggle-task`, {
		method: 'PUT',
		headers: {
			Authorization: JSON.stringify(request.headers['authorization']),
		},
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
	addTask,
	getTasks,
	deleteTask,
	editTask,
	toggleTask,
	deleteAllTasks,
};
