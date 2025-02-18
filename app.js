let numeroSortiados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let qtdTentativas = 1;

function exibirTextoNaTela(tag,texto){
let campo = document.querySelector(tag); // função para exibir titulo e paragrafo
campo.innerHTML=  texto
};


 function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'O Jogo do Número Secreto');// função definindo textos
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
 }


exibirMensagemInicial();

function verificarChute(){
        let chute = document.querySelector('input').value; // função para conferir se o chute esta correto
        if (chute == numeroSecreto){
            let palavrasTentativas = qtdTentativas > 1 ? "tentativas" : "tentativa";
        let mensagem= `Voê descobriu o número secreto com ${qtdTentativas} ${palavrasTentativas}`;
            exibirTextoNaTela('h1', 'ACERTOU!');
            exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
    if(chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        qtdTentativas++;
        limparCampo();
     };
};

function numeroAleatorio(){
    let numeroEscolhido= parseInt(Math.random() * numeroLimite +1); // função para gerar número secreto
    let numerosSortiadosNaLista = numeroSortiados.length;
    if (numerosSortiadosNaLista == numeroLimite){
    numeroSortiados=[];
    }
     if (numeroSortiados.includes(numeroEscolhido)) {;
        return numeroAleatorio();
        }else {
            numeroSortiados.push(numeroEscolhido);
            console.log(numeroSortiados);
            return numeroEscolhido;
            };
    };

function limparCampo() {
    campo= document.querySelector('input'); // função para limpar campo de chute 
    campo.value=  ' ';
};

function reiniciarJogo() {
    numeroSecreto= numeroAleatorio(); // função para reiniciar jogo assim que for finalizado
    limparCampo();
    qtdTentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 };

