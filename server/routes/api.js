const express = require('express');
const router = express.Router();

router.use('/enigma', require('./enigma'));

module.exports = router;
