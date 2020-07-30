const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  detail: String,
  image: String,
  text: String,
  type: String,
  used: Boolean
});

module.exports = model('Questions', questionSchema);
