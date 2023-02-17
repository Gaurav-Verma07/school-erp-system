const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacherController");

router.post("/post",teacherController.post);

module.exports = router;