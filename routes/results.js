var express = require('express'),
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render(
 		'results',{title: 'Results'}
 	);
});

module.exports = router;