var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	res.render(
 		'index',{title: 'Dashboard'}
 	);

	results

});

/*router.post('/', function(req,res){
	)
})*/

module.exports = router;
