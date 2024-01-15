const formAgend = document.getElementById('formAgend');

formAgend.addEventListener('submit', function(event){
    event.preventDefault();
    
    const dataTime = document.getElementById('dataHora').value;
    const agendData = {
        dataTime:dataTime
    }
    fetch('http://localhost:8100/api/agend',{
        method:"POST",
        mode:"cors",
        headers:{
        "Content-type":"application/json",
    },
        body:JSON.stringify(agendData)
    })
    .then(response => response.json())
    .then(data =>{
        console.log('Resposta do servidor:', data)
    })
    .catch(error =>{
        console.error('Error inesperado:', error)
    })
})

