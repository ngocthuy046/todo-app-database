var routerMethods = require('../methods.js');
var routes = require('../routes.js');
const {
	getUsers,
	addUser,
	updateUsers,
	deleteUsers,
	loginUser,
	logoutUser,
} = require('../../controller/users/index.js');

let userRouter = {
	run(request, response) {
		routerMethods.get(request, response, routes.user.value, getUsers);
		routerMethods.post(
			request,
			response,
			routes.user.userLogin.value,
			loginUser
		);
		routerMethods.post(
			request,
			response,
			routes.user.userLogout.value,
			logoutUser
		);
		routerMethods.post(request, response, routes.user.value, addUser);
		routerMethods.put(request, response, routes.user.value, updateUsers);
		routerMethods.delete(request, response, routes.user.value, deleteUsers);
	},
};

module.exports = userRouter;
