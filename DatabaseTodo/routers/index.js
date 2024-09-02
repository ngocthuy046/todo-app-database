let userRouter = require('./userRouter');
let taskRouter = require('./taskRouter');
let router = Object.freeze({
	run: function (request, response) {
		userRouter.run(request, response);
		taskRouter.run(request, response);
	},
});

module.exports = router;
