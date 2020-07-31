const Student = require('../models/Student');

const createUpdateStudent = async (req, res) => {
  let student = req.body;
  if (!student._id) {
    student = new Student(student);
  }
  const updatedStudent = await Student.findOneAndUpdate({ _id: student._id }, student, { useFindAndModify: false, new: true, upsert: true, setDefaultsOnInsert: true });
  res.json(updatedStudent);
};

const deleteStudent = async (req, res) => {
  const student = await Student.findOneAndDelete({ _id: req.params.id });
  res.json(student);
};

const getStudents = async (req, res) => {
  const response = await Student.find();
  res.json(response);
};

module.exports = {
  createUpdateStudent,
  deleteStudent,
  getStudents
};
