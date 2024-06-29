const logout = document.getElementById('logoutButton').addEventListener('click', function() {
  
    localStorage.removeItem('token');
    
    if (localStorage.getItem('token') === null) {
       
        window.location.href = '/main.html';
    } else {
        
        throw new Error("Falha ao sair da sessão!");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loadUsersButton = document.getElementById('loadclientButton');

    loadUsersButton.addEventListener('click', () => {
        fetch('/admin/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                console.log('Resposta do servidor:', data); // Loga a resposta do servidor para inspeção

                if (!data.clientList) {
                    throw new Error('Formato de dados inesperado');
                }

                const clientContainer = document.getElementById('clientContainer');
                clientContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar novos dados

                data.clientList.forEach((item, index) => {
                    const clientItem = document.createElement('div');
                    clientItem.classList.add('client-item');

                    const title = document.createElement('h3');
                    title.textContent = `ID ${index + 1}`;
                    clientItem.appendChild(title);

                    const client = document.createElement('p');
                    client.textContent = `Nome: ${item.name}`;
                    clientItem.appendChild(client);

                    const email = document.createElement('p');
                    email.textContent = `Email: ${item.email}`;
                    clientItem.appendChild(email);

                    const isAdmin = document.createElement('p');
                    isAdmin.textContent = `Admin: ${item.isAdmin ? 'Sim' : 'Não'}`;
                    clientItem.appendChild(isAdmin);

                    // Adiciona o item de cliente ao contêiner
                    clientContainer.appendChild(clientItem);
                });
            })
            .catch(error => console.error('Erro ao buscar usuários:', error));
    });
});
