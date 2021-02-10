const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "First name is Required",
  },

 

  education: {
    type: String,
    trim: true,
    required: "education is required",
  },

  subjects: {
    type: String,
    required: "subject is required",
  },

  experience: {
    type: Number,
    required: "years of experience required",
  },

  // subjects:[
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Subjects"
  //   }
  // ],

  //   status: null,

  

  session: [{type: Schema.Types.ObjectId, ref: "Session"}]
});

const Tutor = mongoose.model("tutor", tutorSchema);

module.exports = Tutor;
