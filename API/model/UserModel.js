const mongoose = require('mongoose');
const {Schema} = mongoose

const Registermodel = new Schema({
    firstName: { type: String},
    lastName: { type: String },
    email: { type: String},
    userName: { type: String},
    password: { type: String},
    conformPassword: { type: String},
  });

  const userRegister = mongoose.model("User Register", Registermodel);

  module.exports = userRegister