const fs = require('fs');
const writeDataToFile = (fileName, data) => {
	fs.writeFileSync(fileName, data, 'utf-8', (error) => console.log(error));
};

const getDataFromRequest = (req) => {
	return new Promise((resolve, reject) => {
		let body = '';
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', () => {
			resolve(JSON.parse(body));
		});
	});
};

const generateUID = () => {
	return Date.now().toString(36) + Math.random().toString(36).substring(2, 11);
};

module.exports = {
	getDataFromRequest,
	generateUID,
	writeDataToFile,
};
