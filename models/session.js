const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    student: {
        type: String,
        trim: true,
        required: "Please enter a tutor name",
    }, 
    sessionLength: {
        type: Number,
        trim: true,
    },
    date: {
        type: String,
    }, 
    time: {
        type: String,
        trim: true,
    },
    approved: {
        type: Boolean,
        default: false,
      },
    
   

});

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
