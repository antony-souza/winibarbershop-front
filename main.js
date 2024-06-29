const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Alternar entre formulários de login e registro
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const formLogin = document.querySelector('.sign-in');

formLogin.addEventListener('submit', evento => {
    evento.preventDefault();
    
    const emailLogin = document.getElementById('email-login').value;
    const passwordLogin = document.getElementById('password-login').value;

    fetch('http://localhost:8100/auth', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailLogin,
            password: passwordLogin
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            const { token, isAdmin } = data;
            localStorage.setItem('token', token);

            if (isAdmin) {
                window.location.href = '/admin/home/home.html';
            } else {
                window.location.href = '/src/home/home.html';
            }
        } else {
            console.error('Erro ao obter token:', data.error || 'Erro desconhecido.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

const formRegister = document.querySelector('.sign-up');

formRegister.addEventListener('submit', evento => {
    evento.preventDefault();
    
    const nameRegister = document.getElementById('name-register').value;
    const emailRegister = document.getElementById('email-register').value;
    const passwordRegister = document.getElementById('password-register').value;
        
    fetch('http://localhost:8100/createUser', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameRegister,
            email: emailRegister,
            password: passwordRegister
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('name-register').value = '';
        document.getElementById('email-register').value = '';
        document.getElementById('password-register').value = '';
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
