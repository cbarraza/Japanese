const Question = require('../models/Question');

const getQuestions = async (req, res) => {
  const response = await Question.find();
  res.json(response);
};

module.exports = {
  getQuestions
};
