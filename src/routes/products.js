const express = require('express');
const router = express.Router();

// Product routes
router.get('/', (req, res) => {
    res.send('Product list');
});

router.get('/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product details for ID: ${productId}`);
});

module.exports = router;
