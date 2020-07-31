const express = require('express');
const path = require('path');
const router = express.Router();
// Controllers
const QuestionsController = require('./controllers/QuestionsController');
const StudentsController = require('./controllers/StudentsController');

// React Route
//Questions
router.delete('/api/question/:id', QuestionsController.deleteQuestion);
router.get('/api/question', QuestionsController.getQuestions);
router.put('/api/question', QuestionsController.createUpdateQuestion);
// Students
router.delete('/api/student/:id', StudentsController.deleteStudent);
router.get('/api/student', StudentsController.getStudents);
router.put('/api/student', StudentsController.createUpdateStudent);

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

module.exports = router;
