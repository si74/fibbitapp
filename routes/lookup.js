var express = require('express'),
	router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
	res.redirect("/results/"+10026);
});

module.exports = router;
