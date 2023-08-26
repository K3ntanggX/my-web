const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nama: { type: String, required: true },
    kategori: { type: String, required: true },
    harga: { type: Number, required: true },
    deskripsi: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
