var userRouter = require('./userRouter');
var taskRouter = require('./taskRouter');
var router = {
	run: function (req, res) {
		userRouter.run(req, res);
		taskRouter.run(req, res);
	},
};

module.exports = router;
