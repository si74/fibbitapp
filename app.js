module.exports = function() {

	var express = require('express');
	var path = require('path');

    // Define Routes
    // Front End
    var routes = require('./routes/index');
    var lookup = require('./routes/lookup');
    var results = require('./routes/results');

    //Create the express app
    var app = express();

    var favicon = require('serve-favicon');

    // view engine setup
    app.set('views', path.join(__dirname, 'views')); //Engine locatoin
    app.set('view engine', 'ejs'); // Type of templating engine used

    app.use(express.static(path.join(__dirname, '/public')));

    app.use(favicon(path.join(__dirname,'/public','images','favicon.ico')));

    app.use('/', routes);
    app.use('/results/', results);
    app.use('/lookup/', lookup);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        // var err = new Error(':( Not Found');
        res.status = 404;
        res.send({ url: req.url, error: 'Page Not Found' });
        next();
    });

	return app;
}