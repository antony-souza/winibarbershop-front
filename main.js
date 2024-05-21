// Seleção dos elementos da página
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

// Função para realizar login e armazenar o token
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
            const { token } = data;
            localStorage.setItem('token', token);

            fetchTokenInfo();
        } else {
            console.error('Erro ao obter token:', data.error || 'Erro desconhecido.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

// Função para obter informações usando o token
function fetchTokenInfo() {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('Token não encontrado. Por favor, faça login novamente.');
        return;
    }

    fetch('http://localhost:8100/gettoken', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch token info');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data.success) {
            window.location.href = '/src/home/home.html';
        } else {
            console.error('Erro ao redirecionar', data.error || 'Erro desconhecido.');
        }
    })
    .catch(error => {
        console.log('Erro:', error);
    });
}

// Função para registrar um novo usuário
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
