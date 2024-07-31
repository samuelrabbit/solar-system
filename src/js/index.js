const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

ocultarSetaVoltar();
ocultarSetaAvancar();

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
    cartaoAtual++
    mostrarCartao();
    ocultarSetaVoltar();
    ocultarSetaAvancar();
})



btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--
    mostrarCartao();
    ocultarSetaVoltar();
    ocultarSetaAvancar();
})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function ocultarSetaVoltar() {
    if (cartaoAtual === 0) {
        btnVoltar.classList.add("oculto");
    } else {
        btnVoltar.classList.remove("oculto");
    }
}

function ocultarSetaAvancar() {
    if (cartaoAtual === cartoes.length - 1) {
        btnAvancar.classList.add("oculto");
    } else {
        btnAvancar.classList.remove("oculto");
    }
}