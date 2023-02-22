const express = require("express");
const router = express.Router();

const {
  adminDataPostController,
  uploadMiddleware,
} = require("../controller/adminDataPostController");
router.post("/postStudentData", uploadMiddleware, adminDataPostController);

module.exports = router;
