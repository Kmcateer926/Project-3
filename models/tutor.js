const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TutorSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last name is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
//may or may not need userCreated
  userCreated: {
    type: Date,
    default: Date.now
  },

  subjects:[
    {
      type: Schema.Types.ObjectId,
      ref: "Subjects"
    }
  ],

  status: null,

  id: {
    type: Number,
    required: true
  }
});

const Tutor = mongoose.model("Tutor", TutorSchema);

module.exports = Tutor;
