const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import model Product (jika ada)

// Endpoint untuk menambahkan produk
router.post('/add-product', async (req, res) => {
    try {
        const { nama, kategori, harga, deskripsi } = req.body;
        const newProduct = new Product({
            nama,
            kategori,
            harga,
            deskripsi
        });
        await newProduct.save();
        res.status(201).json({ message: 'Produk berhasil ditambahkan' });
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat menambahkan produk' });
    }
});

module.exports = router;
