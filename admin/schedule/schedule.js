const logout = document.getElementById('logoutButton').addEventListener('click', function() {
  
    localStorage.removeItem('token');
    
    if (localStorage.getItem('token') === null) {
       
        window.location.href = '/main.html';
    } else {
        
        throw new Error("Falha ao sair da sessão!");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loadScheduleButton = document.getElementById('loadScheduleButton');

    loadScheduleButton.addEventListener('click', () => {
        fetch('/admin/schedule') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                const scheduleContainer = document.getElementById('scheduleContainer');
                scheduleContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar novos dados

                data.scheduleList.forEach((item, index) => {
                    const scheduleItem = document.createElement('div');
                    scheduleItem.classList.add('schedule-item');

                    const title = document.createElement('h3');
                    title.textContent = `Agendamento ${index + 1}`;
                    scheduleItem.appendChild(title);

                    const client = document.createElement('p');
                    client.textContent = `Cliente: ${item.client}`;
                    scheduleItem.appendChild(client);

                    const employee = document.createElement('p');
                    employee.textContent = `Funcionário: ${item.employee}`;
                    scheduleItem.appendChild(employee);

                    const dateHour = document.createElement('p');
                    dateHour.textContent = `Data/Hora: ${item.dateHour}`;
                    scheduleItem.appendChild(dateHour);

                    const haircut = document.createElement('p');
                   if(item.haircut && item.haircut.trim() !==''){
                    haircut.textContent = `Corte: ${item.haircut}`
                   }
                   else{
                    haircut.textContent = "Corte: Não especificou. Perguntar no atendimento!"
                   }
                   scheduleItem.appendChild(haircut)
                   
                    // Adiciona o item de agendamento ao contêiner
                    scheduleContainer.appendChild(scheduleItem);
                });
            })
            .catch(error => console.error('Erro ao buscar agendamentos:', error));
    });
});
