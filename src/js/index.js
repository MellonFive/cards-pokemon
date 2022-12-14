/* 

Objetivo 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista

- Passo 1: Dar um jeito de pegar o elemento HTML  da seta avançar
- Passo 2: Dar um jeito de identificar o clique do usuário na seta avançar
- Passo 3: Fazer aparecer o próximo cartão da lista
- Passo 4: Buscar o cartão que está selecionado esconder
*/

// - Passo 1: Dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

// Passo 3: Fazer aparecer o próximo cartão da lista
const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    // - Passo 4: Buscar o cartão que está selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
} 

// - Passo 2: Dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', function() {
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
    
});


/* OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão  anterior da lista  

    - Passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar
    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar
    - Passo 3 - Fazer aparecer o cartão anterior da lista
    - Passo 4 - Buscar o cartão que esta selecionado e esconder
*/

btnVoltar.addEventListener('click', function() {

    if(cartaoAtual === 0) return;

    // - Passo 4: Buscar o cartão que está selecionado e esconder
    /*const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");*/

    // Substituir por:
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

// Refatorar sempre. O que dá para refatorar você precisa refatorar. Deixar o código mais limpo. Um bom programador faz código para as outras pessoas verem seu código.


