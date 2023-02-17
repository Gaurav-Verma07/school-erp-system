const express = require("express");
const router = express.Router();
const noticeController = require("../controller/noticeController");

router.get("/all",noticeController.all);

router.get("/:id",noticeController.singlepost);

router.post("/post",noticeController.post);

module.exports = router;