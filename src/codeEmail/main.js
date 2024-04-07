const formReset = document.getElementById('form-code');
formReset.addEventListener('submit', e =>{
    e.preventDefault()
    
    const code = document.getElementById('codeMail').value;

    fetch(process.env.API,{
        method:'POST',
        mode:'cors',
        headers:
        {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            code: code
        })
    })
    .then((response) => response.json())
    .then((data) => {
    document.getElementById('codeMail').value = '';
    
    if(data.success){
        window.location.href = '/src/newPassword-reset/newPassword.html';
    }else {
        
        console.error('Envio de código falhou:', data.error || 'Erro desconhecido.');
    }
     console.log(data);

    })})


