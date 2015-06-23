'use strict';

var catberry = require('catberry');

var http = require('http'),
	util = require('util'),
	path = require('path'),
	publicPath = path.join(__dirname, 'public'),
	connect = require('connect'),
	app = connect(),
	templateEngine = require('catberry-jade'),
	config = require('./config/environment.json');

config.publicPath = publicPath;
config.server.port = config.server.port || 3001;
config.isRelease = true;
	
var cat = catberry.create(config),
	logger = cat.locator.resolve('logger');
logger.setLevel('ERROR');

templateEngine.register(cat.locator);

var serveStatic = require('serve-static');
app.use(serveStatic(publicPath));

app.use(cat.getMiddleware());

var errorhandler = require('errorhandler');
app.use(errorhandler());

http
	.createServer(app)
	.listen(config.server.port);
