const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

/* All attendance route */
router.get("/all",studentController.allAttendance);

/* Subject attendance route */
router.get("/:id",studentController.subjectAttendance);

module.exports = router;