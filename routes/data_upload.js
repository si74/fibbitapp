var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
	res.render(
 		'index',{title: 'DATA SUCCESSFULLY UPLOADED'}
 	);
});

var vetDoc = new vetSchema({name:'fish'});

vetDoc.save(function (err, matchDoc) {
  if (err) return console.error(err);
});

module.exports = router;
