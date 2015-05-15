var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router(),
	fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
	res.render(
 		'index',{title: 'DATA SUCCESSFULLY UPLOADED'}
 	);
 	fs.readFile('/data/sample_file.json', 'utf8', function(err,data){

		for (var key in data){
			console.log(key,data[key]);
		}

		if (err) return console.error(err);

	})
});


//var vetDoc = new vetSchema(vetFile);

//vetDoc.save(function (err, matchDoc) {
//  if (err) return console.error(err);
//});

module.exports = router;
