document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Simulate login process
        if (username === 'user' && password === 'user') {
            alert('Login successful!');
            // Redirect to dashboard
            window.location.href = '../views/dashboard.html'; // Ganti dengan path sesuai struktur Anda
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
