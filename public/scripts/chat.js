// Mendapatkan referensi ke elemen-elemen yang dibutuhkan
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.querySelector('.input-field');
const sendButton = document.querySelector('.chat-input button');

// Membuat koneksi WebSocket
const socket = new WebSocket('ws://localhost:3000'); // Ganti dengan URL server WebSocket Anda

// Menambahkan event listener saat koneksi terbuka
socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
});

// Menambahkan event listener untuk menerima pesan dari server
socket.addEventListener('message', (event) => {
    const messageData = JSON.parse(event.data);
    const messageElement = createMessageElement(messageData);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Menambahkan event listener untuk tombol kirim
sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== '') {
        const messageData = {
            text: message,
            timestamp: new Date().toISOString()
        };
        socket.send(JSON.stringify(messageData));
        chatInput.value = '';
    }
});

// Fungsi untuk membuat elemen pesan
function createMessageElement(messageData) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (messageData.sender === 'me') {
        messageElement.classList.add('my-message');
    } else {
        messageElement.classList.add('their-message');
    }

    const messageText = document.createElement('p');
    messageText.textContent = messageData.text;
    messageElement.appendChild(messageText);

    const messageTime = document.createElement('span');
    messageTime.classList.add('message-time');
    messageTime.textContent = formatMessageTime(messageData.timestamp);
    messageElement.appendChild(messageTime);

    return messageElement;
}

// Fungsi untuk memformat waktu pesan
function formatMessageTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}
