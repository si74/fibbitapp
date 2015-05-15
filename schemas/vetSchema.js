var mongoose = require('mongoose');

var vetSchema = mongoose.Schema({
	rating: Number,
    mobile_url: String,
    name: String,
    url: String,
    longitude: Number,
    phone: String,
    postal_code: String,
    display_phone: String,
    address: String,
    latitude: Number,
    is_closed: Boolean,
    web_url: String,
    hours: {
        m : String,
        t : String,
        w : String,
        th: String,
        f : String,
        sat : String,
        su : String
    },
    fb_url: String,
    twitter_url: String,
    aaha: Boolean,
    cat_friendly: Boolean,
    low_cost: Boolean,
    house_visit: Boolean,
    t_24_hour: Boolean,
    general: Boolean,
    specialists: Boolean,
    prices :{
        office_visit : Number
    },
    care_credit: Boolean,
    pet_insurance : Boolean, 
    payment_plan : Boolean
});