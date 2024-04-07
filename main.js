const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

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

    fetch(process.env.API, {
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
    .then((response) => response.json())
    .then(data => {
        const { token } = data;

        localStorage.setItem('token', token);

        fetchTokenInfo();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function fetchTokenInfo() {
    fetch(process.env.API, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
         if(data.success){
            window.location.href = '/src/home/home.html';
        }else {
            
            console.error('Error ao redirecionar', data.error || 'Erro desconhecido.');
        } 
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const formRegister = document.querySelector('.sign-up');

formRegister.addEventListener('submit', evento =>{
    evento.preventDefault()
    
    const nameRegister = document.getElementById('name-register').value
    const emailRegister = document.getElementById('email-register').value;
    const passwordRegister = document.getElementById('password-register').value;
    
    fetch(process.env.API,{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name:nameRegister,
            email: emailRegister,
            password: passwordRegister
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('name-register').value = '';
        document.getElementById('email-register').value = '';
        document.getElementById('password-register').value = '';
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
})
