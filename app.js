import express, { json } from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import https from 'https';

const app = express();

app.use(json());
app.use(cors());

const options = {
	key: readFileSync('./key.pem', 'utf-8'),
	cert: readFileSync('./server.crt', 'utf-8'),
};

app.get('/', (req, res) => {
	console.log('get hit');
	res.sendStatus(200);
});

app.post('/', (req, res) => {
	console.log(req);

	res.sendStatus(200);
});

const httpsServer = https.createServer(options, app);

httpsServer.listen(4001, () => console.log('listening'));
