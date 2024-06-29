const formReset = document.getElementById('form-reset');
formReset.addEventListener('submit', e =>{
    e.preventDefault()
    
    const email = document.getElementById('email-login').value;

    fetch('http://localhost:8100/reset/email',{
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
    
    if(data.success){
        document.getElementById('email-login').value = '';
        window.location.href = '/src/codeEmail/codeEmail.html';
    }else {
        console.error('Envio de código falhou:', data.error || 'Erro desconhecido.');
        return alert('Falha no email!')
    }
     console.log(data);

    })})


