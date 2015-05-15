var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	//grab data from DB
	vetSchema.find().lean().exec(function(err,docs){
		 if (err){
		  	var data = {title: 'Fibbit NYC'}
		 }else{
			var data = {title: 'Fibbit NYC', vets: docs}
			res.render('index', data);
		}

	});

});

/*router.post('/', function(req,res){
	)
})*/

module.exports = router;
