const routerMethods = require('../methods.js');
const routes = require('../routes.js');
const {
	getUsers,
	addUser,
	loginUser,
	checkTokenIsValid,
	logoutUser,
} = require('../../controllers/users/index.js');

const userRouter = {
	run(request, response) {
		routerMethods.get(request, response, routes.user.value, getUsers);
		routerMethods.post(
			request,
			response,
			routes.user.userLogin.value,
			loginUser
		);
		routerMethods.delete(
			request,
			response,
			routes.user.userLogout.value,
			logoutUser
		);
		routerMethods.post(request, response, routes.user.value, addUser);
		routerMethods.post(
			request,
			response,
			routes.user.checkToken.value,
			checkTokenIsValid
		);
	},
};

module.exports = userRouter;
