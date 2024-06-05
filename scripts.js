let balance = 10000;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Manuel' && password === '1990') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('atm').style.display = 'block';
        document.getElementById('welcome').innerText = `Bienvenido, ${username}`;
        document.getElementById('balance').innerText = balance;
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        document.getElementById('balance').innerText = balance;
        document.getElementById('message').innerText = 'Depósito exitoso';
    } else {
        document.getElementById('message').innerText = 'Por favor, ingrese una cantidad válida';
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById('balance').innerText = balance;
        document.getElementById('message').innerText = 'Retiro exitoso';
    } else if (amount > balance) {
        document.getElementById('message').innerText = 'Dinero insuficiente';
    } else {
        document.getElementById('message').innerText = 'Por favor, ingrese una cantidad válida';
    }
}

function checkBalance() {
    document.getElementById('message').innerText = `Su saldo actual es: $${balance}`;
}

function logout() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('atm').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('message').innerText = '';
}
