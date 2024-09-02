let routerMethods = require('../methods.js');

let routes = require('../routes.js');
const {
	addTask,
	getAllTasks,
	deleteTask,
	editTask,
	toggleTask,
} = require('../../controllers/tasks/index.js');
let taskRouter = {
	run(request, response) {
		routerMethods.get(request, response, routes.task.value, getAllTasks);
		routerMethods.post(request, response, routes.task.value, addTask);
		routerMethods.delete(request, response, routes.task.value, deleteTask);
		routerMethods.patch(request, response, routes.task.value, editTask);
		routerMethods.patch(
			request,
			response,
			routes.task.toggleTask.value,
			toggleTask
		);
	},
};
module.exports = taskRouter;
