const formAgendamento = document.getElementById('agendamentoForm');

formAgendamento.addEventListener('submit', e =>{
    e.preventDefault()

    const dataHour = document.getElementById('dataHour').value;
    const barbeiro = document.getElementById('barbeiro').value;

    fetch('http://localhost:8100/agendar',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dataHour:dataHour,
            barbeiro:barbeiro
        })
    })
    .then((reponse) => reponse.json())
    .then((data) =>{
        console.log(data)
    })

});