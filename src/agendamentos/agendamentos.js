const formAgendamento = document.getElementById('agendamentoForm');

formAgendamento.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('client').value;
    const dateHour = document.getElementById('dataHora').value;
    const employee = document.getElementById('barbeiro').value;

    const token = localStorage.getItem('token');

    fetch('http://localhost:8100/Schedule', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            client: name,
            dateHour: dateHour,
            employee: employee
        })
    })
    .then(response => response.json())
    .then((data) => {
       
        document.getElementById('client').value = '';
        document.getElementById('dataHora').value = '';
        document.getElementById('barbeiro').value = '';

        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao processar de agendamento');
    });
});
