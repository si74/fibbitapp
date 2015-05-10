// require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fibbit');

module.exports = mongoose.connection;