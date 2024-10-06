const express = require('express');
const router = express.Router();

const tracking = require('./routes/tracking.routes');

router.use('/tracking', tracking);

module.exports = router;