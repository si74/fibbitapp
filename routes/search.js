var express = require('express'),
	router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
	var zipcode = req.params.zipcode;
	res.render(
 		'results',{title: 'Results', zipcode: zipcode}
 	);
});

module.exports = router;
