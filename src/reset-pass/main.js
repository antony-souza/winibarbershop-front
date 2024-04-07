const formReset = document.getElementById('form-reset');
formReset.addEventListener('submit', e =>{
    e.preventDefault()
    
    const email = document.getElementById('email-login').value;

    fetch('https://winibarbershop-back-6hile7zaua-uw.a.run.app',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then((response) => response.json())
    .then((data) => {
    document.getElementById('email-login').value = '';
    
    if(data.success){
        window.location.href = '/src/codeEmail/codeEmail.html';
    }else {
        
        console.error('Envio de código falhou:', data.error || 'Erro desconhecido.');
    }
     console.log(data);

    })})


