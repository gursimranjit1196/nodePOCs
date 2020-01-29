const db = require('../connections/db');
const mongoose = require('mongoose');

Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fullname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    validate: [
      function (email) {
        let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return emailRegex.test(email);
      },
      'The e-mail is invalid.'
    ],
  },
  birthyear: {
    type: Number,
    required: true
  },
  age: {
    type: Number
  }
});


module.exports = db.model('User', userSchema);