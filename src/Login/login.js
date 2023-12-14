const form = document.getElementById('form-login');

form.addEventListener('submit', evento =>{
    evento.preventDefault()
    
    const email = document.getElement('.email').value;
    const password = document.getElement('.pw').value;
    
    //Configurar a rota de login na API!
    fetch('http://localhost:8100/login',{
        method:'GET',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
})