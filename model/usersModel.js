let users = require('../database/userList.json');
const { generateUID, writeDataToFile } = require('../ultis/index.js');

const getUsersModel = () => {
	return new Promise((resolve, reject) => {
		resolve(users);
	});
};

const checkUserExistModel = (data) => {
	return new Promise((resolve, reject) => {
		const result = users.find((user) => user.email === data.email);
		console.log(result);
		resolve(result);
	});
};

const addUserModel = (data) => {
	const newUser = {
		id: generateUID(),
		email: data.email,
		password: data.password,
		token: generateUID(),
	};
	return new Promise((resolve, reject) => {
		users.push(newUser);
		writeDataToFile('./database/userList.json', JSON.stringify(users));
		resolve(newUser);
	});
};

const loginUserModel = (loginData) => {
	return new Promise((resolve, reject) => {
		const user = users.find(
			(user) =>
				user.email === loginData.email && user.password === loginData.password
		);
		if (user) {
			user.token = generateUID();
			writeDataToFile('./database/userList.json', JSON.stringify(users));
			resolve(user);
		} else {
			resolve('');
		}
	});
};

const logoutUserModel = (logoutData) => {
	return new Promise((resolve, reject) => {
		const user = users.find(
			(user) =>
				user.email === logoutData.email && user.password === logoutData.password
		);
		if (user) {
			delete user.token;
			writeDataToFile('./database/userList.json', JSON.stringify(users));
			resolve(user);
		} else {
			resolve('');
		}
	});
};

const checkToken = (user_id, token) => {
	return new Promise((resolve, reject) => {
		const user = users.find(
			(user) => user.id === user_id && user?.token === token
		);
		if (user) {
			resolve(true);
		}
	});
};

module.exports = {
	loginUserModel,
	logoutUserModel,
	getUsersModel,
	addUserModel,
	checkUserExistModel,
	checkToken,
};
