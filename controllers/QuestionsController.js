const Question = require('../models/Question');

const createUpdateQuestion = async (req, res) => {
  let question = req.body;
  if (!question._id) {
    question = new Question(question);
  }
  const updatedQuestion = await Question.findOneAndUpdate({ _id: question._id }, question, { useFindAndModify: false, new: true, upsert: true, setDefaultsOnInsert: true });
  res.json(updatedQuestion);
};

const deleteQuestion = async (req, res) => {
  const question = await Question.findOneAndDelete({ _id: req.params.id });
  res.json(question);
};

const getQuestions = async (req, res) => {
  const response = await Question.find();
  res.json(response);
};

module.exports = {
  createUpdateQuestion,
  deleteQuestion,
  getQuestions
};
