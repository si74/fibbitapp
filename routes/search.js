var express = require('express'),
	vetSchema = require('../schemas/vetSchema.js'),
	bodyParser = require('body-parser'),
	router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* GET home page. */
router.post('/', function(req, res) {
	var param = {}
	console.log(req.body);

	//AAHA 
	if (req.body.aaha){
		param['aaha'] = true;
	}

	//cat-friendly
	if (req.body.cat_friendly){
		param['cat_friendly'] = true;
	}

	//house call vet?
	if (req.body.house_visit){
		param['house_visit'] = true;
	}

	//24-hour vet?
	if (req.body.t_24_hour){
		param['t_24_hour'] = true;
	}
	
	//lowcost?
	if (req.body.low_cost){
		param['low_cost'] = true;
	}

	//accepts care credit?
	if (req.body.care_credit){
		param['care_credit'] = true;
	}

	//accepts pet insurance
	if (req.body.pet_insurance){
		param['pet_insurance'] = true;
	}

	//accepts payment plans
	if (req.body.payment_plan){
		param['payment_plan'] = true;
	}

	console.log(param);

	vetSchema.find(param).lean().exec(function(err,docs){
		 if (err){
		  	var data = {vets: 'Error!'}
		  	res.render
		 }else{
			var data = {vets: docs}
			res.status(200).json(data);
		}

	});

});

module.exports = router;
