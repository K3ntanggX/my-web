const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Route to login page at root domain
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kevin.add-product', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Berhasil terhubung ke MongoDB');
})
.catch((error) => {
    console.error('Kesalahan koneksi MongoDB:', error);
});


// Other routes and configurations

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
