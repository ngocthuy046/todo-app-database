let users = require('../../database/userList.json');
const { generateUID, writeDataToFile } = require('../ultis/index.js');

function getUsersModel() {
	// return new Promise((resolve, reject) => {
	// 	const isTokenValid = checkToken(data.id, data.token);
	// 	resolve(users);
	// });
}

function checkUserExistModel(data) {
	return new Promise((resolve, reject) => {
		const result = users.find((user) => user.email === data.email);
		console.log(result);
		resolve(result);
	});
}

function addUserModel(data) {
	const newUser = {
		id: generateUID(),
		email: data.email,
		password: data.password,
		token: generateUID(),
	};
	return new Promise((resolve, reject) => {
		users.push(newUser);
		writeDataToFile('./database/userList.json', JSON.stringify(users));
		resolve('Register success');
	});
}

function loginUserModel(data) {
	return new Promise((resolve, reject) => {
		const user = users.find(
			(user) => user.email === data.email && user.password === data.password
		);
		if (user) {
			user.token = generateUID();
			writeDataToFile('./database/userList.json', JSON.stringify(users));
			resolve(user);
		} else {
			resolve('User not found');
		}
	});
}

function logoutUserModel(data) {
	return new Promise((resolve, reject) => {
		const user = users.find(
			(user) => user.email === data.email && user.password === data.password
		);
		if (user) {
			delete user.token;
			writeDataToFile('./database/userList.json', JSON.stringify(users));
			resolve('Logout sucess');
		} else {
			resolve('');
		}
	});
}

function checkToken(user_id, token) {
	return new Promise((resolve, reject) => {
		let message;
		const user = users.find(
			(user) => user.id === user_id && user?.token === token
		);
		if (user) {
			message = 'Token is valid';
			resolve(message);
		} else {
			message = 'Token is not valid';
			resolve(message);
		}
	});
}

module.exports = {
	loginUserModel,
	logoutUserModel,
	getUsersModel,
	addUserModel,
	checkUserExistModel,
	checkToken,
};
