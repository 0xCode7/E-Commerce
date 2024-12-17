document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('usernameInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const confPasswordInput = document.getElementById('confPasswordInput').value;

    if (confPasswordInput === passwordInput) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', usernameInput);
        localStorage.setItem('password', passwordInput);
        register.classList.remove('show-register');
        window.location.href('index.html');
    } else {
        alert('Passwords do not match!');
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const passwordInput = document.getElementById('passwordInput').value;
    const storedPassword = localStorage.getItem('password')
    if (passwordInput === storedPassword) {
        localStorage.setItem('loggedIn', 'true');
        login.classList.remove('show-login');
        window.location.reload();
    } else {
        alert('Invalid username or password!');
    }
});

