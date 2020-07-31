const express = require('express');
const path = require('path');
const router = express.Router();
// Controllers
const StudentsController = require('./controllers/StudentsController');

// React Route
router.get('/api/student', StudentsController.getStudents);
router.put('/api/student', StudentsController.createUpdateStudent);

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

module.exports = router;
