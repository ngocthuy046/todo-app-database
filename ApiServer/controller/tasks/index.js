const {
	getDataFromRequest,
	handleMessage,
	checkAuthorizationHeaders,
} = require('../../ultis/index.js');
const { httpStatusCode, urlAPI } = require('../../constants.js');
const { METHODS } = require('../../constants');
// Fixed to integrate with node DBserver
async function addTask(request, response) {
	const body = await getDataFromRequest(request);
	const token = checkAuthorizationHeaders(request);
	let message = '';
	let dataToCheckToken = {
		user_id: body.user_id,
		token: token,
	};
	const tokenIsValid = await fetch(`${urlAPI}/api/users/check-token`, {
		method: METHODS.POST,
		body: JSON.stringify(dataToCheckToken),
	});
	if (tokenIsValid.ok) {
		const result = await fetch(`${urlAPI}/api/tasks`, {
			method: METHODS.POST,
			body: JSON.stringify(body),
		});
		message = JSON.parse(await result.text());
		handleMessage(message, response);
	} else {
		message = JSON.parse(await result.text());
		handleMessage(message, response);
	}
}

async function getAllTasks(request, response) {
	const body = await getDataFromRequest(request);
	const token = checkAuthorizationHeaders(request);
	let message;
	let dataToCheckToken = {
		user_id: body.user_id,
		token: token,
	};
	const tokenIsValid = await fetch(`${urlAPI}/api/users/check-token`, {
		method: METHODS.POST,
		body: JSON.stringify(dataToCheckToken),
	});
	if (tokenIsValid.ok) {
		const result = await fetch(`${urlAPI}/api/tasks/get-all-tasks`, {
			method: METHODS.POST,
			body: JSON.stringify(body),
		});
		message = JSON.parse(await result.text());
		console.log(message);
		// handleMessage(message, response);
	} else {
		message = await tokenIsValid.text();
		console.log(message);
		// handleMessage(message, response);
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

async function editTask(request, response) {
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
			method: METHODS.PUT,
			body: JSON.stringify(body),
		});
		message = await result.text();
		handleMessage(message, response);
	} else {
		message = await tokenIsValid.text();
		handleMessage(message, response);
	}
}

async function toggleTask(request, response) {
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
		const result = await fetch(`${urlAPI}/api/tasks/toggle-task`, {
			method: METHODS.PUT,
			body: JSON.stringify(body),
		});
		message = await result.text();
		handleMessage(message, response);
	} else {
		message = await tokenIsValid.text();
		handleMessage(message, response);
	}
}

module.exports = {
	addTask,
	getAllTasks,
	deleteTask,
	editTask,
	toggleTask,
	deleteAllTasks,
};
