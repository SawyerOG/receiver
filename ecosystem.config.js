module.exports = {
	apps: [
		{
			name: 'ape',
			script: 'app.js',
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
};
