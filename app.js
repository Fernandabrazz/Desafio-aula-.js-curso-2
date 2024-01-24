
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Jogo Secreto";

function verificarChute() {
    console.log('O botão foi clicado')

}


alert("Eu amo JS")

let pergunta = prompt('Qual o nome da sua cidade?');

let mensagem = `Estive em ${pergunta} e lembrei de você.`;
alert(mensagem);



function Soma() {
    let numero1 = prompt('Digite o primeiro número:');
    
    if (isNaN(numero1)) {
        alert('Por favor, digite um número válido para o primeiro valor.');
        return;
    }
    let numero2 = prompt('Digite o segundo número:');

    if (isNaN(numero2)) {
        alert('Por favor, digite um número válido para o segundo valor.');
        return;
    }

    let resultado = parseFloat(numero1) + parseFloat(numero2);

    alert(`A soma de ${numero1} e ${numero2} é: ${resultado}`);
}

// Função para ativar o botão
function ativarBotao() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

// Ativando o botão após algum evento (por exemplo, quando a página carrega)
window.onload = function() {
    ativarBotao();
};
