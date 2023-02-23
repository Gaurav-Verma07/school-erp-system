const express = require('express');

const router = express.Router();
const newStudentController = require('../controller/newStudentController');

// Register a new student
router.post('/register', newStudentController.registerHandler);

module.exports = router;
