var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	//grab data from DB
	vetSchema.find().lean().exec(function(err,docs){
		 if (err){
		  	var data = {title: 'Fibbit NYC', vets: 'Error!'};
		  	res.status(500);
		 }else{
			var data = {title: 'Fibbit NYC', vets: docs};
			res.status(200).render('alpha', data);
		}

	});

});



module.exports = router;
