const formGPT = document.getElementById("form-gpt");
const responseGPT = document.getElementById("response-gpt");

const logout = document.getElementById('logoutButton').addEventListener('click', function() {
  
    localStorage.removeItem('token');
    
    if (localStorage.getItem('token') === null) {
       
        window.location.href = '/main.html';
    } else {
        
        throw new Error("Falha ao sair da sessão!");
    }
});

        formGPT.addEventListener('submit', async (e) => {
            e.preventDefault();

            const message = document.getElementById("message").value;

            try {
                const response = await fetch("http://localhost:8100/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        temperature: 1.0,
                        max_tokens: 3000,
                        messages: [
                            { "role": "system", "content": "You are a helpful assistant designed to output JSON." },
                            { "role": "user", "content": message }
                        ]
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const assistantResponse = data.choices[0].message.content;
                responseGPT.textContent = assistantResponse;

            } catch (error) {
                console.error('Erro ao enviar mensagem para o ChatGPT:', error);
                responseGPT.textContent = "Erro ao processar a solicitação.";
            }
        });