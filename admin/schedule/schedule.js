const logout = document.getElementById('logoutButton').addEventListener('click', function() {
  
    localStorage.removeItem('token');
    
    if (localStorage.getItem('token') === null) {
       
        window.location.href = '/main.html';
    } else {
        
        throw new Error("Falha ao sair da sessão!");
    }
});