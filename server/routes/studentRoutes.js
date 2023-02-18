const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

/* Login route */
router.post("/login", studentController.Login);

/* Logout route */
router.get("/logout", studentController.Logout);

module.exports = router;
