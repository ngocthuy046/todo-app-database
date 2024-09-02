const routerMethods = Object.freeze({
	get: function (req, res, path, callback) {
		if (path === req.url && req.method === 'GET') {
			callback(req, res);
		}
	},
	post: function (req, res, path, callback) {
		if (path === req.url && req.method === 'POST') {
			callback(req, res);
		}
	},
	put: function (req, res, path, callback) {
		if (path === req.url && req.method === 'PUT') {
			callback(req, res);
		}
	},
	delete: function (req, res, path, callback) {
		if (path === req.url && req.method === 'DELETE') {
			callback(req, res);
		}
	},
	options: function (req, res, path, callback) {
		if (path === req.url && req.method === 'OPTIONS') {
			callback(req, res);
		}
	},
});

module.exports = routerMethods;
