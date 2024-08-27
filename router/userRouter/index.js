let routerMethods = require('../methods.js');
let routes = require('../routes.js');
const { 
  getUsers, 
  addUser, 
  updateUsers, 
  deleteUsers,
  loginUser,
  logoutUser } = require('../../controller/users/index.js');

  let userRouter = {
  run(req, res) {
    routerMethods.get(req, res, routes.user.value, getUsers);
    routerMethods.post(req, res, routes.user.userLogin.value, loginUser);
    routerMethods.post(req, res, routes.user.userLogout.value, logoutUser);
    routerMethods.post(req, res, routes.user.value, addUser);
    routerMethods.put(req, res, routes.user.value, updateUsers)
    routerMethods.delete(req, res, routes.user.value, deleteUsers);
  },
};

module.exports = userRouter;
