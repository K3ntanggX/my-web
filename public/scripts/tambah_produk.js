document.addEventListener('DOMContentLoaded', function () {
    const exitButton = document.getElementById('exit-button');

    exitButton.addEventListener('click', function () {
        window.location.href = 'dashboard.html'; // Ganti dengan URL halaman dashboard Anda
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('#add-product-button');

    addButton.addEventListener('click', async (event) => {
        event.preventDefault();

        const nama = document.querySelector('#product-name').value;
        const kategori = document.querySelector('#product-category').value;
        const harga = document.querySelector('#product-price').value;
        const deskripsi = document.querySelector('#product-description').value;

        try {
            const response = await fetch('/api/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama,
                    kategori,
                    harga,
                    deskripsi
                })
            });

            if (response.ok) {
                console.log('Produk berhasil ditambahkan');
                // Lakukan tindakan lain setelah produk ditambahkan
            } else {
                console.error('Terjadi kesalahan saat menambahkan produk');
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    });
});
