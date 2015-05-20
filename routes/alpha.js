var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	var data = {title: 'Fibbit NYC'};
	res.status(200).render('alpha', data);

});

module.exports = router;
