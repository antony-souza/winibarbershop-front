const logout = document.getElementById('logoutButton').addEventListener('click', function() {
  
    localStorage.removeItem('token');
    
    if (localStorage.getItem('token') === null) {
       
        window.location.href = '/main.html';
    } else {
        
        throw new Error("Falha ao sair da sessão!");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loadUsersButton = document.getElementById('loadUsersButton');

    loadUsersButton.addEventListener('click', () => {
        fetch('http://localhost:8100/admin/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                const usersTableBody = document.querySelector('#myTable tbody');
                usersTableBody.innerHTML = '';

                data.users.forEach(user => {
                    const row = document.createElement('tr');
                    const idCell = document.createElement('td');
                    const nameCell = document.createElement('td');
                    const emailCell = document.createElement('td');
                    const isAdminCell = document.createElement('td');

                    idCell.textContent = user._id; 
                    nameCell.textContent = user.name;
                    emailCell.textContent = user.email;
                    isAdminCell.textContent = user.isAdmin ? 'Sim' : 'Não';

                    row.appendChild(idCell);
                    row.appendChild(nameCell);
                    row.appendChild(emailCell);
                    row.appendChild(isAdminCell);

                    usersTableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Erro ao buscar usuários:', error));
    });
});
