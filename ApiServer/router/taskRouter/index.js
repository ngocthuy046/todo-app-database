var routerMethods = require('../methods.js');

var routes = require('../routes.js');
const {
	addTask,
	getAllTasks,
	deleteTask,
	deleteAllTasks,
	editTask,
	toggleTask,
} = require('../../controller/tasks/index.js');
let taskRouter = {
	run(request, response) {
		routerMethods.post(
			request,
			response,
			routes.task.getAllTasks.value,
			getAllTasks
		);
		routerMethods.post(request, response, routes.task.value, addTask);
		routerMethods.delete(request, response, routes.task.value, deleteTask);
		routerMethods.delete(
			request,
			response,
			routes.task.deleteAllTasks.value,
			deleteAllTasks
		);
		routerMethods.put(request, response, routes.task.value, editTask);
		routerMethods.put(
			request,
			response,
			routes.task.toggleTask.value,
			toggleTask
		);
	},
};
module.exports = taskRouter;