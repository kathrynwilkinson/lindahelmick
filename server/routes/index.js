const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const APIRoutes = require('./api');
const path = require('path');

router.use('/auth', authRoutes);
router.use('/api', APIRoutes);
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'))
})

module.exports = router;
