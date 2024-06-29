const formReset = document.getElementById('form-code');
formReset.addEventListener('submit', e =>{
    e.preventDefault()
    
    const code = document.getElementById('codeMail').value;

    fetch('http://localhost:8100/reset/code',{
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
        if(data.success){
        document.getElementById('codeMail').value = '';
        window.location.href = '/src/newPassword-reset/newPassword.html';
    }else {
        console.error('Envio de código falhou:', data.error || 'Erro desconhecido.');
        return alert('Falha no código!')
    }
     console.log(data);

    })})