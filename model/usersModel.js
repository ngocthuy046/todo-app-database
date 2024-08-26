let users = require('../database/userList.json');
const { generateUID, writeDataToFile } = require('../ultis/index.js');

const getUsersModel = () => {
	return new Promise((resolve, reject) => {
		const isTokenValid = checkToken(data.id, data.token);
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
		const isTokenValid = checkToken(data.id, data.token);
		if (isTokenValid) {
			users.push(newUser);
			writeDataToFile('./database/userList.json', JSON.stringify(users));
			resolve(newUser);
		}
	});
};

const loginUserModel = (data) => {
	return new Promise((resolve, reject) => {
	  const user = users.find(
		(user) => user.email === data.email && user.password === data.password
	  );
	  if (user) {
		const isTokenValid = checkToken(user.id, data.token);
		if (isTokenValid) {
		  user.token = generateUID();
		  writeDataToFile('./database/userList.json', JSON.stringify(users));
		  resolve(user);
		} else {
		  resolve('');
		}
	  } else {
		resolve('');
	  }
	});
};

const logoutUserModel = (data) => {
	return new Promise((resolve, reject) => {
	  const user = users.find(
		(user) => user.email === data.email && user.password === data.password
	  );
	  if (user) {
		const isTokenValid = checkToken(user.id, data.token);
		if (isTokenValid) {
		  delete user.token;
		  writeDataToFile('./database/userList.json', JSON.stringify(users));
		  resolve(user);
		} else {
		  resolve('');
		}
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
