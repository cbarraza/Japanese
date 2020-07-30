const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
  name: String
});

module.exports = model('Students', studentSchema);
