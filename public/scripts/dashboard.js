document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', function () {
        // Clear session or token (replace this with actual logic)
        sessionStorage.removeItem('userToken'); // Clear session storage as an example
        // Redirect to login page
        window.location.href = '../views/index.html'; // or window.location.href = '/index.html';
    });
});

// Tombol untuk membuka halaman tambah produk
document.addEventListener('DOMContentLoaded', function () {
    // ...

    const addProdukButton = document.getElementById('add-produk-button');

    addProdukButton.addEventListener('click', function () {
        // Arahkan pengguna ke halaman tambah produk
        window.location.href = 'tambah_produk.html';
    });
});

// Tombol untuk membuka menu
const openMenuButton = document.getElementById('open-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const navbar = document.getElementById('menu-container');

openMenuButton.addEventListener('click', () => {
    navbar.style.left = '0';
});

closeMenuButton.addEventListener('click', () => {
    navbar.style.left = '-300px';
});

// Tombol untuk membuka chat
const openChatButton = document.getElementById('open-chat-button');
const closeChatButton = document.getElementById('close-chat-button');
const chatContainer = document.getElementById('chat-container');

openChatButton.addEventListener('click', () => {
    console.log('Opening chat...');
    chatContainer.classList.add('open-chat');
});

closeChatButton.addEventListener('click', () => {
    console.log('Closing chat...');
    chatContainer.classList.remove('open-chat');
});
