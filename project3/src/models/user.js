const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, requlred: true },
  age: { type: String, required: true },
  gender: { type : String, required: true },
  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
