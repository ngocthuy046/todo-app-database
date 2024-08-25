let userRouter = require('./userRouter');
let taskRouter = require('./taskRouter');
let router = {
    run: function(req, res) {
        userRouter.run(req, res);
        taskRouter.run(req, res);
    }
}

module.exports = router;