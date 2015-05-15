var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;


var matchesSchema = mongoose.Schema({
	date: String,
	matchNumber: String,
	startTime: String,
	logFileURL: String,
	fighters: {
		blueFighter_id: { type: ObjectId, ref: 'TkdFighter' },
		redFighter_id: { type: ObjectId, ref: 'TkdFighter' }
	},
	sensorLevels: {
		body: String,
		head: String
	},
	rounds: {
		blue: {
			one: {
				rounds_id: ObjectId,
				video_id: ObjectId
			},
			two: {
				rounds_id: ObjectId,
				video_id: ObjectId
			},
			three: {
				rounds_id: ObjectId,
				video_id: ObjectId
			}
		},
		red: {
			one: {
				rounds_id: ObjectId,
				video_id: ObjectId
			},
			two: {
				rounds_id: ObjectId,
				video_id: ObjectId
			},
			three: {
				rounds_id: ObjectId,
				video_id: ObjectId
			}
		}
	}
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
matchesSchema.methods.statusMessage = function () {
  var message = this.matchNumber
    ? "Match Number " + this.matchNumber + " added"
    : "Woops, no Match Numbers detected";
  console.log(message);
}
module.exports = mongoose.model('TkdMatch', matchesSchema);
