let tasks = require('../database/todoTask.json');
const { generateUID, writeDataToFile } = require('../ultis/index.js');
function addNewTaskModel(data) {
	return new Promise((resolve, reject) => {
		if (data.name && data.user_id && data.completed) {
			const newTask = {
				id: generateUID(),
				name: data.name,
				user_id: data.user_id,
				completed: data.completed,
			};
			tasks.unshift(newTask);
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			resolve('Add task success');
		} else {
			resolve('Data is missing');
		}
	});
}

function getAllTasksByIdModel(id) {
	return new Promise((resolve, reject) => {
		const taskList = tasks.filter((task) => task.user_id === id);
		if (taskList) {
			resolve(taskList);
		} else {
			resolve('');
		}
	});
}

function deleteTaskModel(data) {
	return new Promise((resolve, reject) => {
		const task = tasks.find((task) => task.id === data.id);
		let message;
		if (task) {
			const updatedlistTasks = tasks.filter((task) => task.id !== data.id);
			tasks = updatedlistTasks;
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			message = 'Delete task success';
			resolve(message);
		} else {
			message = 'Task not found';
			resolve(message);
		}
	});
}

function deleteAllTasksModel(data) {
	return new Promise((resolve, reject) => {
		let message;
		const updatedTaskList = tasks.filter(
			(task) => task.user_id !== data.user_id
		);
		if (updatedTaskList) {
			tasks = updatedTaskList;
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			message = 'Delete all tasks success';
			resolve(message);
		} else {
			message = 'Task not found';
			resolve(message);
		}
	});
}

function editTaskModel(data) {
	return new Promise((resolve, reject) => {
		const task = tasks.find((task) => task.id === data.id);
		let message;
		if (task) {
			task.name = data.name;
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			message = 'Edit task success';
			resolve(message);
		} else {
			message = 'Task not found';
			resolve(message);
		}
	});
}

function toggleTaskModel(data) {
	return new Promise((resolve, reject) => {
		const task = tasks.find((task) => task.id === data.id);
		let message;
		if (task) {
			task.completed = data.completed;
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			message = 'Toggle task success';
			resolve(message);
		} else {
			message = 'Task not found';
			resolve(message);
		}
	});
}

module.exports = {
	addNewTaskModel,
	deleteTaskModel,
	deleteAllTasksModel,
	editTaskModel,
	toggleTaskModel,
	getAllTasksByIdModel,
};
