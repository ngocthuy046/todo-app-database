const {
	addNewTaskModel,
	getAllTasksModel,
	deleteTaskModel,
	deleteAllTasksModel,
	editTaskModel,
	toggleTaskModel,
} = require('../../models/taskModel.js');
const { getDataFromRequest, handleMessage } = require('../../ultis/index.js');
const { httpStatusCode } = require('../../constants.js');

async function addTask(request, response) {
	const body = await getDataFromRequest(request);
	const message = await addNewTaskModel(body);
	handleMessage(message, response);
}

async function getAllTasks(request, response) {
	const body = await getDataFromRequest(request);
	const taskList = await getAllTasksModel(body);
	if (taskList) {
		response.writeHead(httpStatusCode.OK, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(taskList));
	} else {
		response.writeHead(httpStatusCode.NOT_FOUND, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify('Error'));
	}
}

async function deleteTask(request, response) {
	const body = await getDataFromRequest(request);
	const message = await deleteTaskModel(body);
	handleMessage(message, response);
}

async function deleteAllTasks(request, response) {
	const body = await getDataFromRequest(request);
	const message = await deleteAllTasksModel(body);
	handleMessage(message, response);
}

async function editTask(request, response) {
	const body = await getDataFromRequest(request);
	const message = await editTaskModel(body);
	handleMessage(message, response);
}

async function toggleTask(request, response) {
	const body = await getDataFromRequest(request);
	const message = await toggleTaskModel(body);
	handleMessage(message, response);
}

module.exports = {
	addTask,
	getAllTasks,
	deleteTask,
	editTask,
	toggleTask,
	deleteAllTasks,
};
