const {
	addNewTask,
	getAllTasksModel,
	deleteTaskModel,
	deleteAllTasksModel,
	editTaskModel,
	toggleTaskModel,
} = require('../../model/taskModel.js');
const {
	checkAuthorizationHeaders,
	getBodyDataRequest,
	handleMessage,
} = require('../../ultis/index.js');
const { httpStatusCode } = require('../../constants.js');

const addTask = async (request, response) => {
	const token = checkAuthorizationHeaders(request);
	const body = await getBodyDataRequest(request);
	let data = {
		...body,
		token: token,
	};
	const message = await addNewTask(data);
	handleMessage(message);
};

const getAllTasks = async (request, response) => {
	const token = checkAuthorizationHeaders(request);
	const tasks = await getAllTasksModel();
	response.writeHead(httpStatusCode.OK, {
		'Content-Type': 'application/json',
	});
	response.end(JSON.stringify(tasks));
};

const deleteTask = async (request, response) => {
	const token = checkAuthorizationHeaders(request);
	const body = await getBodyDataRequest(request);
	let data = {
		id: body,
		token: token,
	};
	const message = await deleteTaskModel(data);
	handleMessage(message);
};

const deleteAllTasks = async (request, response) => {
	const token = checkAuthorizationHeaders(request);
	const body = await getBodyDataRequest(request);
	let data = {
		user_id: body,
		token: token,
	};
	const message = await deleteAllTasksModel(data);
	handleMessage(message);
};

const editTask = async (request, response) => {
	const token = checkAuthorizationHeaders(request);
	const body = await getBodyDataRequest(request);
	let data = {
		...body,
		token: token,
	};
	const message = await editTaskModel(data);
	handleMessage(message);
};

const toggleTask = async (request, response) => {
	const token = checkAuthorizationHeaders(request);
	const body = await getBodyDataRequest(request);
	let data = {
		id: body,
		token: token,
	};
	const message = await toggleTaskModel(data);
	handleMessage(message);
};

module.exports = {
	addTask,
	getAllTasks,
	deleteTask,
	editTask,
	toggleTask,
	deleteAllTasks,
};
