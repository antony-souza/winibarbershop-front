const formAgendamento = document.getElementById('agendamentoForm');

formAgendamento.addEventListener('submit', e => {
    e.preventDefault();

    const dataHour = document.getElementById('dataHora').value; // Corrigido o ID para 'dataHora'
    const barbeiro = document.getElementById('barbeiro').value;

    fetch('http://localhost:8100/agendar', { // Removido o espaço em branco após a URL
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dataHour: dataHour,
            barbeiro: barbeiro
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário:', error);
    });
});
