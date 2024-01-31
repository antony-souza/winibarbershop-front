const formReset = document.getElementById('form-reset');
formReset.addEventListener('submit', e =>{
    e.preventDefault()
    
    const email = document.getElementById('email-login').value;

    fetch('http://localhost:8100/users/reset',{
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
     console.log(data);

})})


