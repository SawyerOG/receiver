const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
// import { readFileSync } from 'fs';
// import https from 'https';

const app = express();

app.use(express.json());
app.use(cors());

// const options = {
// 	key: readFileSync('./key.pem', 'utf-8'),
// 	cert: readFileSync('./server.crt', 'utf-8'),
// };

app.get('/', (req, res) => {
	console.log('get hit');
	res.sendStatus(200);
});
app.get('/docusign', (req, res) => {
	console.log('DOCUSIGN get hit!!!!!');
	res.sendStatus(200);
});

app.post('/', (req, res) => {
	console.log(req.body);

	res.sendStatus(201);
});
app.post('/docusign', (req, res) => {
	console.log('POSTED TO /docusign');
	console.log(req.body);

	axios.post('http://localhost:4000/api/ds/receiveEnv', req.body);

	res.sendStatus(200);
});

app.post('/timeoff_request', (req, res) => {
	console.log('POSTED TO time off request post');

	console.log(req.headers);
	console.log(req.body);
	res.sendStatus(200);
});
// const httpsServer = https.createServer(options, app);

// httpsServer.listen(4001, () => console.log('listening'));

app.listen(4001, () => console.log('listening'));
