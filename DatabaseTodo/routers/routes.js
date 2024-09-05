module.exports = {
	user: {
		value: '/api/users',
		userLogin: {
			value: '/api/users/login',
		},
		userLogout: {
			value: '/api/users/logout',
		},
		checkToken: {
			value: '/api/users/check-token',
		},
	},
	task: {
		value: '/api/tasks',
		toggleTask: {
			value: '/api/tasks/toggle-task',
		},
		deleteAllTasks: {
			value: '/api/tasks/delete-all-tasks',
		},
	},
};
