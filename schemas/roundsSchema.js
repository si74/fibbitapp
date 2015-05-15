var mongoose = require('mongoose');


var roundsSchema = mongoose.Schema({
	pointsArray: Array
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
roundsSchema.methods.statusMessage = function () {
  var message = this._id
    ? "Round ID >> " + this._id + " >>"
    : "Woops, no Round ID detected";
  console.log(message);
}
module.exports = mongoose.model('tkdRound', roundsSchema);
