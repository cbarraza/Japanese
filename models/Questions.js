const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  content: String,
  example: String,
  type: String,
  used: Boolean
});

module.exports = model('Questions', questionSchema);
