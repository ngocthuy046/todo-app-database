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
	const token = checkAuthorizationHeaders(request, response);
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
		message = await result.json();
		handleMessage(message, response);
	} else {
		message = await result.json();
		handleMessage(message, response);
	}
}

async function getAllTasksById(request, response) {
	const id = request.url.split('?id=')[1];
	const token = checkAuthorizationHeaders(request, response);
	let message;
	let dataToCheckToken = {
		user_id: id,
		token: token,
	};
	const tokenIsValid = await fetch(`${urlAPI}/api/users/check-token`, {
		method: METHODS.POST,
		body: JSON.stringify(dataToCheckToken),
	});
	if (tokenIsValid.ok) {
		const result = await fetch(`${urlAPI}/api/tasks?id=${id}`, {
			method: METHODS.GET,
		});
		if (result.ok) {
			message = await result.json();
			response.writeHead(httpStatusCode.OK, {
				'Content-Type': 'application/json',
			});
			response.end(JSON.stringify(message));
		} else {
			message = await result.json();
			handleMessage(message, response);
		}
	} else {
		message = await tokenIsValid.json();
		handleMessage(message, response);
	}
}

async function deleteTask(request, response) {
	const body = await getDataFromRequest(request);
	const token = checkAuthorizationHeaders(request, response);
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
			method: 'DELETE',
			body: JSON.stringify(body),
		});
		if (result.ok) {
			message = 'Delete task success';
			handleMessage(message, response);
		} else {
			message = await result.json();
			handleMessage(message, response);
		}
	} else {
		message = await tokenIsValid.json();
		handleMessage(message, response);
	}
}
// deleteAllTasks: not fix
async function deleteAllTasks(request, response) {
	const body = await getDataFromRequest(request);
	const token = checkAuthorizationHeaders(request, response);
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
		const result = await fetch(`${urlAPI}/api/tasks/delete-all-tasks`, {
			method: 'DELETE',
			body: JSON.stringify(body),
		});
		if (result.ok) {
			message = 'Delete all tasks success';
			handleMessage(message, response);
		} else {
			message = await result.json();
			handleMessage(message, response);
		}
	} else {
		message = await tokenIsValid.json();
		handleMessage(message, response);
	}
}

async function editTask(request, response) {
	const body = await getDataFromRequest(request);
	const token = checkAuthorizationHeaders(request, response);
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
		const result = await fetch(`${urlAPI}/api/tasks`, {
			method: METHODS.PATCH,
			body: JSON.stringify(body),
		});
		if (result.ok) {
			message = 'Edit task success';
			handleMessage(message, response);
		}
	} else {
		message = await tokenIsValid.json();
		handleMessage(message, response);
	}
}

async function toggleTask(request, response) {
	const body = await getDataFromRequest(request);
	const token = checkAuthorizationHeaders(request, response);
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
		const result = await fetch(`${urlAPI}/api/tasks`, {
			method: METHODS.PATCH,
			body: JSON.stringify(body),
		});
		if (result.ok) {
			message = 'Toggle task success';
			handleMessage(message, response);
		}
	} else {
		message = await tokenIsValid.json();
		handleMessage(message, response);
	}
}

module.exports = {
	addTask,
	deleteTask,
	editTask,
	toggleTask,
	deleteAllTasks,
	getAllTasksById,
};
