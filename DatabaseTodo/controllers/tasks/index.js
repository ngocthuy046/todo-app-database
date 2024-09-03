const {
	addNewTaskModel,
	deleteTaskModel,
	deleteAllTasksModel,
	editTaskModel,
	toggleTaskModel,
	getAllTasksByIdModel,
} = require('../../models/taskModel.js');
const { getDataFromRequest, handleMessage } = require('../../ultis/index.js');
const { httpStatusCode } = require('../../constants.js');

async function addTask(request, response) {
	const body = await getDataFromRequest(request);
	const message = await addNewTaskModel(body);
	handleMessage(message, response);
}

async function getAllTasksById(request, response) {
	const id = request.url.split('?id=')[1];
	const taskList = await getAllTasksByIdModel(id);
	if (taskList) {
		response.writeHead(httpStatusCode.OK, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify(taskList));
	} else {
		response.writeHead(httpStatusCode.NOT_FOUND, {
			'Content-Type': 'application/json',
		});
		response.end(JSON.stringify('Task not found'));
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
	getAllTasksById,
	deleteTask,
	editTask,
	toggleTask,
	deleteAllTasks,
};
