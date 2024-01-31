const formReset = document.getElementById('form-reset');
formReset.addEventListener('submit', e =>{
    e.preventDefault()
    
    const email = document.getElementById('token-reset').value;
    const token = document.getElementById('token-reset').value;
    const newPass = document.getElementById('newPassword-reset').value;

    fetch('http://localhost:8100/users/reset',{
        method:'GET',
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
     console.log(data);

})})


