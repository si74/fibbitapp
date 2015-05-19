var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	//grab data from DB
	vetSchema.find().lean().exec(function(err,docs){
		 if (err){
		  	var data = {title: 'Fibbit NYC', vets: 'Error!'}
		 }else{
			var data = {title: 'Fibbit NYC', vets: docs}
			res.render('alpha', data);
		}

	});

});



module.exports = router;
