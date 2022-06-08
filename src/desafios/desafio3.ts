// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo : HTMLElement | null = document.getElementById('campo-saldo');
 
(campoSaldo) ? campoSaldo.innerHTML = "0" : null;



function somarAoSaldo(soma : string) {
    campoSaldo ? campoSaldo.innerHTML += soma : null;
}

function limparSaldo() {
    campoSaldo ? campoSaldo.innerHTML = '' : null;
}

botaoAtualizar ? botaoAtualizar.addEventListener('click', function () {
    soma ? somarAoSaldo(soma.innerText): null;
}) : null;

botaoLimpar ? botaoLimpar.addEventListener('click', function () {
    limparSaldo();
}) : null;

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */