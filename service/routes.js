// routes.js
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-joke', controller.getData);

module.exports = router;
