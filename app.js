module.exports = function() {

	var express = require('express');
	var path = require('path');

    // Define Routes
    // Front End
    var index = require('./routes/index');
    var alpha = require('./routes/alpha');
    var lookup = require('./routes/lookup');
    var search = require('./routes/search');
    var data_upload = require('./routes/data_upload');

    //Create the express app
    var app = express();

    var favicon = require('serve-favicon');

    // view engine setup
    app.set('views', path.join(__dirname, 'views')); //Engine locatoin
    app.set('view engine', 'ejs'); // Type of templating engine used

    app.use(express.static(path.join(__dirname, '/public')));

    app.use(favicon(path.join(__dirname,'/public','images','favicon.ico')));

    app.use('/',index);
    app.use('/alpha/', alpha);
    app.use('/search/', search);
    app.use('/lookup/', lookup);
    app.use('/data_upload',data_upload);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        // var err = new Error(':( Not Found');
        res.status = 404;
        res.send({ url: req.url, error: 'Page Not Found' });
        next();
    });

	return app;
}