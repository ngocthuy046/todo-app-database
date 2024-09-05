const userRouter = require('./userRouter');
const taskRouter = require('./taskRouter');
const router = Object.freeze({
	run: function (request, response) {
		userRouter.run(request, response);
		taskRouter.run(request, response);
	},
});

module.exports = router;
