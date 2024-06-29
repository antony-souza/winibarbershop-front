const formAgendamento = document.getElementById('agendamentoForm');

const logout = document.getElementById('logoutButton').addEventListener('click', function() {
  
    localStorage.removeItem('token');
    
    if (localStorage.getItem('token') === null) {
       
        window.location.href = '/main.html';
    } else {
        
        throw new Error("Falha ao sair da sessão!");
    }
});

formAgendamento.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('client').value;
    const dateHour = document.getElementById('dataHora').value;
    const employee = document.getElementById('barbeiro').value;
    const haircut = document.getElementById('haircut').value

    const token = localStorage.getItem('token');

    fetch('http://3.142.52.13:8100/Schedule', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            client: name,
            dateHour: dateHour,
            employee: employee,
            haircut:haircut
        })
    })
    .then(response => response.json())
    .then((data) => {
       
        document.getElementById('client').value = '';
        document.getElementById('dataHora').value = '';
        document.getElementById('barbeiro').value = '';
        document.getElementById('haircut').value = '';

        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro no agendamento');
    });
});