module.exports = {
	apps: [
		{
			name: 'receiver',
			script: 'app.js',
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
};
