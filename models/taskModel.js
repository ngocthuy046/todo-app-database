let tasks = require('../database/todoTask.json');
const { generateUID, writeDataToFile } = require('../ultis/index.js');
function addNewTaskModel(data) {
	const newTask = {
		id: generateUID(),
		name: data.name,
		user_id: data.user_id,
		completed: data.completed,
	};
	return new Promise((resolve, reject) => {
		tasks.unshift(newTask);
		writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
		resolve('Add task success');
	});
}

function getAllTasksModel(data) {
	return new Promise((resolve, reject) => {
		const taskList = tasks.filter((task) => task.user_id === data.user_id);
		resolve(taskList);
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
		const updatedlistTasks = tasks.filter(
			(task) => task.user_id !== data.user_id
		);
		tasks = updatedlistTasks;
		writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
		message = 'Delete all tasks success';
		resolve(message);
	});
}

function editTaskModel(data) {
	return new Promise((resolve, reject) => {
		const task = tasks.find((task) => task.id === data.id);
		let message;
		if (task) {
			task.name = data.name;
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			message = 'Edit Task success';
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
	getAllTasksModel,
	deleteTaskModel,
	deleteAllTasksModel,
	editTaskModel,
	toggleTaskModel,
};
