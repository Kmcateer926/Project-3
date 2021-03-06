const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//model for tutors
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

  email: {
    type: String,
    unique: true,
    sparse: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
 
  imageURL: {
    type: String,
    trim: true,
    required: "Enter a tutor image URL",
  },
  approved: {
    type: Boolean,
    default: false,
  },
  
   session: [{type: Schema.Types.ObjectId, ref: "Session"}]
});

const Tutor = mongoose.model("Tutor", tutorSchema);

module.exports = Tutor;
