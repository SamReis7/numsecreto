//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrago = document.querySelector('p');
//paragrago.innerHTML = 'Escolha um número entre 1 e 10';
let listaNsort = [];
let numlimite = 10;
let numSecret = gerarNRandom();
tentativas = 1;

function exibeTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });

}
function mensageminicial() {
    exibeTexto('h1', 'Jogo do Número Secreto');
    exibeTexto('p', 'Escolha um numero entre 1 e 10');
}

mensageminicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSecret) {
        exibeTexto('h1', 'Acertou, Miseravi!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentantivas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibeTexto('p', mensagemTentantivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numSecret) {
        exibeTexto('p', `O numero secreto é menor que ${chute}`);
    } else {
        exibeTexto('p', `O numero secreto é maior que ${chute}`);
    } tentativas++;
    limpacampo();

}

function gerarNRandom() {
    let numEscolhido = parseInt(Math.random() * numlimite + 1);
    let quntElementos = listaNsort.length;

    if (listaNsort == numlimite) {
        listaNsort = [];
    }

    if (listaNsort.includes(numEscolhido)) {
        return gerarNRandom();
    } else {
        listaNsort.push(numEscolhido);
        console.log(listaNsort);
        return numEscolhido;
    }

}

function limpacampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecret = gerarNRandom();
    limpacampo();
    tentativas = 1;
    mensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}