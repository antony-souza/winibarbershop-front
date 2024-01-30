const formReset = document.getElementById('form-reset');
formReset.addEventListener('submit', e =>{
    e.preventDefault()
    
    fetch('http://localhost:8100/users/reset',{
        method:'PATCH',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email: emailLogin
        })
    })
    .then((response) => response.json())
    .then((data) => {
     console.log(data);

})})