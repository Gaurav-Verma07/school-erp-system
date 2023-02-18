const express = require('express');
const router = express.Router();

const noticeController = require('../controller/noticeController');

router.get('/all', noticeController.getAllNotice);

router.get('/:id', noticeController.getOneNotice);

router.post('/post', noticeController.postNotice);

module.exports = router;
