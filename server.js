const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const app = express();

const port = 3000;

app.use(express.static(__dirname + 'dist'));

app.use(webpackHotMiddleware(compiler, {
    noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(webpackDevMiddleware(compiler, {
	hot: true,
	filename: 'bundle.js',
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true,
	},
	historyApiFallback: true,
}));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const server = app.listen(port, function() {
	console.log(`Example app listening at http://localhost:${port}`);
});
