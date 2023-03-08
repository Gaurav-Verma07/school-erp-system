const express = require("express");
const router = express.Router();
const {
  postTeachersDataController,
  uploadMiddleware,
} = require("../controller/postTeachersDataController");

// Define route to handle teachers data upload
router.post("/postTeachersData", uploadMiddleware, postTeachersDataController);

module.exports = router;

//why this .all..
