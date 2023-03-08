const express = require('express');

const router = express.Router();
const teacherController = require('../controller/teacherController');

router.post("/post", teacherController.postHandler);
router.post(
  "/assignment",
  teacherController.uploadMiddleware,
  teacherController.assignmentHandler
);

module.exports = router;
