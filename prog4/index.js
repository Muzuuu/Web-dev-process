const express = require('express');
const router = express.Router();
const rout =require('./rout/rout.js');
app.use('/api',rout)
module.exports = router;
