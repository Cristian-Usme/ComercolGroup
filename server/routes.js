const express = require('express');
const router = express.Router();

const tracking = require('./routes/tracking.routes');
const pqr = require('./routes/pqr.routes');

router.use('/tracking', tracking);
router.use('/pqr', pqr);

module.exports = router;