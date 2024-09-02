var userRouter = require('./userRouter');
var taskRouter = require('./taskRouter');
var router = Object.freeze({
	run: function (request, response) {
		userRouter.run(request, response);
		taskRouter.run(request, response);
	},
});

module.exports = router;
