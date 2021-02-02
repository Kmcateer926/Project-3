const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "First name is Required",
  },

  // lastName: {
  //   type: String,
  //   trim: true,
  //   required: "Last name is Required",
  // },

  //may or may not need userCreated
  userCreated: {
    type: Date,
    default: Date.now,
  },

  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subjects",
    },
  ],

  status: null,

  id: {
    type: Number,
    required: true,
  },
});

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
