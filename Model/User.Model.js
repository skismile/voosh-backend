const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  phoneNumber: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const UserModel = model("user", UserSchema);
module.exports = UserModel;
