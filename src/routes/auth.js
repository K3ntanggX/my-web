const express = require('express');
const router = express.Router();

// Authentication routes
router.get('/login', (req, res) => {
    res.send('Login page');
});

router.get('/register', (req, res) => {
    res.send('Registration page');
});

module.exports = router;
