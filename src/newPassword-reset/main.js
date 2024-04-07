const formNewPassword = document.getElementById('form-newPassword');

formNewPassword.addEventListener('submit', e => {
    e.preventDefault();
    
    const newPassword = document.getElementById('newPassword').value;
    const newPasswordConfirm = document.getElementById('newPassword-confirm').value;

    fetch(process.env.API, { 
        method:'PUT',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm
        })
    })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('newPassword').value = '';
        document.getElementById('newPassword-confirm').value = '';
        
        if(data.success){
            window.location.href = '/src/login-register/index.html';
        }else {
            
            console.error('Error na atualização da senha:', data.error || 'Erro desconhecido.');
        }

        console.log(data);
    });
});
