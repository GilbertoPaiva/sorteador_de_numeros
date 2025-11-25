document.addEventListener('DOMContentLoaded', function(event) {
    let sequencia = [];
    const codigoSecreto = ['l', 'a', 'r', 'a'];
    
    document.addEventListener('keypress', function(e) {
        sequencia.push(e.key.toLowerCase());
        sequencia = sequencia.slice(-codigoSecreto.length);
        
        if (sequencia.join('') === codigoSecreto.join('')) {
            document.getElementById('resultado-valor').innerText = 'Te amo princesinha 💚';
            document.querySelector('.resultado').style.display = 'block';
            sequencia = [];
        }
    });

    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio) + 1;

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})