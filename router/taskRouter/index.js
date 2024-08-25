let routerMethods = require('../methods.js');

let routes = require('../routes.js');
const {
	addTask,
	getAllTasks,
	deleteTask,
	editTask,
	toggleTask,
} = require('../../controller/tasks/index.js');
let taskRouter = {
	run(req, res) {
		routerMethods.get(req, res, routes.task.value, getAllTasks);
		routerMethods.post(req, res, routes.task.value, addTask);
		routerMethods.delete(req, res, routes.task.value, deleteTask);
		routerMethods.put(req, res, routes.task.value, editTask);
		routerMethods.put(req, res, routes.task.toggleTask.value, toggleTask);
	},
};
module.exports = taskRouter;
