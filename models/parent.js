const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parentSchema = new Schema({
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
});

parentSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const Parent = mongoose.model("SignUp", parentSchema);

module.exports = Parent;
