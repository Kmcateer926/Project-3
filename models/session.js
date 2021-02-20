const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//model for sessions
const SessionSchema = new Schema({
	student: {
		type: String,
		trim: true,
		required: "Please enter a tutor name",
	},
	sessionLength: {
		type: Number,
		trim: true,
		required: [true,'please enter session length']
		
	},
	date: {
		type: String,
		required: [true, 'please pick a date']
		
	},
	time: {
		type: String,
		trim: true,
		required: [true, 'please pick a time']
	},

	tutor: {
		type: Schema.Types.ObjectId,
		ref: "Tutor",
	},
});

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
