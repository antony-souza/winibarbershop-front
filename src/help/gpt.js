const formGPT = document.getElementById("form-gpt");
const responseGPT = document.getElementById("response-gpt");

formGPT.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("http://localhost:8100/gpt", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + "sk-proj-vN0duIA0I5jf2AZu5K9OT3BlbkFJ6hdGWmNQi9JvjClFS0ZG"
            },
            body: JSON.stringify({
                model: "davinci-002",
                prompt: message,
                max_tokens: 2048,
                temperature: 0.5
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        responseGPT.value = data.choices[0].text.trim();
    } catch (error) {
        console.error(error);
        responseGPT.value = "Erro ao processar a solicitação.";
    }
});
