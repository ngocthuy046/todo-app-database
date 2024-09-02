const { METHODS } = require('../constants');

const routerMethods = Object.freeze({
	get: function (request, response, path, callback) {
		if (path === request.url && request.method === METHODS.GET) {
			callback(request, response);
		}
	},
	post: function (request, response, path, callback) {
		if (path === request.url && request.method === METHODS.POST) {
			callback(request, response);
		}
	},
	put: function (request, response, path, callback) {
		if (path === request.url && request.method === METHODS.PUT) {
			callback(request, response);
		}
	},
	patch: function (request, response, path, callback) {
		if (path === request.url && request.method === METHODS.PATCH) {
			callback(request, response);
		}
	},
	delete: function (request, response, path, callback) {
		if (path === request.url && request.method === METHODS.DELETE) {
			callback(request, response);
		}
	},
	options: function (request, response, path, callback) {
		if (path === request.url && request.method === METHODS.OPTIONS) {
			callback(request, response);
		}
	},
});

module.exports = routerMethods;
