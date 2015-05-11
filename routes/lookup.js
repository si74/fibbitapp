var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.post('/', function(req, res) {
	var zipcode = req.body.zipcode;
	res.redirect("/results/"+zipcode);
});

module.exports = router;
