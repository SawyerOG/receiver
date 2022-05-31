const express = require('express'),
	app = express(),
	cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	console.log('get hit');
	res.sendStatus(200);
});

app.post('/', (req, res) => {
	console.log(req);

	res.sendStatus(200);
});

app.listen(4001, () => console.log('listening'));
