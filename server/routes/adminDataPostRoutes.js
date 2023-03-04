const express = require("express");
const router = express.Router();

const {
  adminDataPostController,
  uploadMiddleware,
  postTeachersDataController,
} = require("../controller/adminDataPostController");
router.post("/postStudentData", uploadMiddleware, adminDataPostController);
router.post("/postTeacherData", uploadMiddleware, postTeachersDataController);

module.exports = router;
