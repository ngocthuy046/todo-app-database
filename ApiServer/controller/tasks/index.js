const { getDataFromRequest } = require('../../ultis/index.js');
const { httpStatusCode, urlAPI } = require('../../constants.js');

const addTask = async (request, response) => {
	const body = await getDataFromRequest(request);
	const result = await fetch(`${urlAPI}/api/tasks`, {
		method: 'POST',
		headers: {
			Authorization: JSON.stringify(request.headers['authorization']),
		},
		body: JSON.stringify(body),
	});
	if (!result.ok) {
		throw new Error('Network result was not ok');
	} else {
		response.writeHead(httpStatusCode.CREATED, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(await result.json()));
	}
};

const getTasks = async (request, response) => {
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
};

const deleteTask = async (request, response) => {
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
};

const deleteAllTasks = async (request, response) => {
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
};

const editTask = async (request, response) => {
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
};

const toggleTask = async (request, response) => {
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
};

module.exports = {
	addTask,
	getTasks,
	deleteTask,
	editTask,
	toggleTask,
	deleteAllTasks,
};
