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

  // password: {
  //   type: String,
  //   trim: true,
  //   required: "Password is Required",
  //   validate: [({ length }) => length >= 6, "Password should be longer."]
  // },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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
