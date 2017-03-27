const express = require('express');
const path = require('path');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();
if (process.env.NODE_ENV !== 'production') {
	app.use(webpackMiddleware(webpack(webpackConfig)));
}
else {
	app.use(express.static('dist'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}

app.listen(process.env.PORT || 3050, () => console.log('Listening'));