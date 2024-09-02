const { METHODS } = require('../constants');
const routerMethods = Object.freeze({
	get: function (req, res, path, callback) {
		if (path === req.url && req.method === METHODS.GET) {
			callback(req, res);
		}
	},
	post: function (req, res, path, callback) {
		if (path === req.url && req.method === METHODS.POST) {
			callback(req, res);
		}
	},
	put: function (req, res, path, callback) {
		if (path === req.url && req.method === METHODS.PUT) {
			callback(req, res);
		}
	},
	delete: function (req, res, path, callback) {
		if (path === req.url && req.method === METHODS.DELETE) {
			callback(req, res);
		}
	},
	options: function (req, res, path, callback) {
		if (path === req.url && req.method === METHODS.OPTIONS) {
			callback(req, res);
		}
	},
});

module.exports = routerMethods;
