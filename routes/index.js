var express = require('express'),
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	var data = {title: 'Fibbit NYC'}
	res.render('index', data);

});

module.exports = router;