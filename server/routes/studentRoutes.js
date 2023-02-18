const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

/* Login route */
router.post('/login', studentController.loginHandler);

/* Logout route */
router.get('/logout', studentController.logoutHandler);

module.exports = router;
