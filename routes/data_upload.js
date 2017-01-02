var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router(),
	fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
	res.render(
 		'data',{title: 'DATA SUCCESSFULLY UPLOADED'}
 	);

 	var data = require('../data/data.json');

	for (var key in data){
		console.log("****************************************",data[key]);
		var vetDoc = new vetSchema(data[key]);

		vetDoc.save(function (err, vettyDuck) {
		 if (err) return console.error(err);
		});
	}



});




module.exports = router;
