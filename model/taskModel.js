let tasks = require('../database/todoTask.json');
const { generateUID, writeDataToFile } = require('../ultis/index.js');
const { checkToken } = require('./usersModel.js');
const addNewTask = (data) => {
	const newTask = {
		id: generateUID(),
		name: data.name,
		user_id: data.user_id,
		completed: data.completed,
	};
	return new Promise((resolve, reject) => {
		const isTokenValid = checkToken(data.id, data.token);
		if (isTokenValid) {
			tasks.unshift(newTask);
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			resolve(newTask);
		}
	});
};

const getAllTasksModel = (data) => {
	return new Promise((resolve, reject) => {
		const isTokenValid = checkToken(data.id, data.token);
		resolve(tasks);
	});
};

const deleteTaskModel = (data) => {
	return new Promise((resolve, reject) => {
		const task = tasks.find((task) => task.id === data.id);
		let message;
		if (task) {
			const isTokenValid = checkToken(task.user_id, data.token);
			if (isTokenValid) {
				const updatedlistTasks = tasks.filter((task) => task.id !== data.id);
				tasks = updatedlistTasks;
				writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
				message = 'Success';
				resolve(message);
			} else {
				message = 'Token is not valid';
				resolve(message);
			}
		} else {
			message = 'Task not found';
			resolve(message);
		}
	});
};

const deleteAllTasksModel = (data) => {
	return new Promise((resolve, reject) => {
		const isTokenValid = checkToken(data.user_id, data.token);
		let message;
		if (isTokenValid) {
			const updatedlistTasks = tasks.filter(
				(task) => task.user_id !== data.user_id
			);
			tasks = updatedlistTasks;
			writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
			message = 'Success';
			resolve(message);
		} else {
			message = 'Token is not valid';
			resolve(message);
		}
	});
};

const editTaskModel = async (data) => {
	return new Promise((resolve, reject) => {
		const task = tasks.find((task) => task.id === data.id);
		let message;
		if (task) {
			const isTokenValid = checkToken(task.user_id, data.token);
			if (isTokenValid) {
				task.name = data.name;
				writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
				message = 'Success';
				resolve(message);
			} else {
				message = 'Token is not valid';
				resolve(message);
			}
		} else {
			message = 'Task not found';
			resolve(message);
		}
	});
};

const filterState = Object.freeze({
	DONE: 'done',
	UNDONE: 'undone',
	ALL: 'all',
});

const toggleTaskModel = async (data) => {
	return new Promise((resolve, reject) => {
		const task = tasks.find((task) => task.id === data.id);
		let message;
		if (task) {
			const isTokenValid = checkToken(task.user_id, data.token);
			if (isTokenValid) {
				if (task.completed === filterState.UNDONE) {
					task.completed = filterState.DONE;
				} else {
					task.completed = filterState.UNDONE;
				}
				writeDataToFile('./database/todoTask.json', JSON.stringify(tasks));
				message = 'Success';
				resolve(message);
			} else {
				message = 'Token is not valid';
				resolve(message);
			}
		} else {
			message = 'Task not found';
			resolve(message);
		}
	});
};

module.exports = {
	addNewTask,
	getAllTasksModel,
	deleteTaskModel,
	deleteAllTasksModel,
	editTaskModel,
	toggleTaskModel,
};
