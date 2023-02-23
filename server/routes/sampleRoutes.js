const express = require('express');

const router = express.Router();
const sampleController = require('../controller/sampleController');

router.get('/', sampleController.getSample);

module.exports = router;
