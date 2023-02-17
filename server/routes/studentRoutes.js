const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

/* Login route */
router.post("/login", studentController.Login);

/* Logout route */
router.get("/logout", studentController.Logout);

/* All attendance route */
router.get("/attendance/all",studentController.allAttendance);

/* Subject attendance route */
router.get("/attendance/:id",studentController.subjectAttendance);

module.exports = router;
