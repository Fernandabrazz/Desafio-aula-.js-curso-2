
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Jogo Secreto";

function verificarChute() {
    console.log('O botão foi clicado')

}

//4.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
alert("Eu amo JS")

let pergunta = prompt('Qual o nome da sua cidade?');

//5.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

let mensagem = `Estive em ${pergunta} e lembrei de você.`;
alert(mensagem);



