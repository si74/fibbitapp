var mongoose = require('mongoose');


var fightersSchema = mongoose.Schema({
	name: String,
	genderWeight: String
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
fightersSchema.methods.statusMessage = function () {
  var message = this.name
    ? "Fighter >> " + this.name + " >>"
    : "Woops, no fighter detected";
  console.log(message);
}
module.exports = mongoose.model('TkdFighter', fightersSchema);
