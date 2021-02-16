const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parentSchema = new Schema({
  // name: {
  //   type: String,
  //   trim: true,
  //   required: "name"
  // },

  //   lastName: {
  //     type: String,
  //     trim: true,
  //     required: "Last name is Required"
  //   },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    sparse: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  //may or may not need userCreated
  // userCreated: {
  //   type: Date,
  //   default: Date.now
  // },

  // subjects:[
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Subjects"
  //   }
  // ],

  //   status: null,

  // id: {
  //   type: Number,
  //   required: true
  // }
});

parentSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const Parent = mongoose.model("SignUp", parentSchema);

module.exports = Parent;
