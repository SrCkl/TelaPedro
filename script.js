document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    
    document.getElementById('message').innerText = `Cadastro de ${name} realizado com sucesso!`;
    
    this.reset();
});