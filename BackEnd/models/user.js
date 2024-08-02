const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//-------create Schema user------
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//--------exports model-------------
module.exports = mongoose.model("User", userSchema);
