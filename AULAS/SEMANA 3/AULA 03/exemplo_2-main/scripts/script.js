var jogador1 = true;
var jogador2 = false;
var jogador_vez = 1;

function alteraJogador() {

    var casas = document.body.querySelectorAll(".espaco");

    for (var x = 0; x < casas.length; x++) {

        casas[x].setAttribute("onclick", jogador1 ? "joga(this)" : "");
        casas[x].setAttribute("ondblclick", jogador1 ? "" : "joga(this)");

        // aqui eu removo os atributos onde tem classe "jogado"
        // para não aceitar mais cliques
        if (casas[x].classList.contains("jogado")) {
            casas[x].removeAttribute("onclick");
            casas[x].removeAttribute("ondblclick");
        }
    }
}

function joga(casa) {
    jogador1 = !jogador1;
    jogador2 = !jogador2;

    casa.classList.remove("espaco");
    casa.classList.add("jogado");

    alteraJogador();

    if (jogador_vez == 1) {
        // faz algo quando o jogador 1 jogar
        console.log("Jogador 1 jogou.");
    } else {
        // faz algo quando o jogador 2 jogar
        console.log("Jogador 2 jogou.");
    }

    jogador_vez = jogador1 ? 1 : 2;

    console.log("Vez do jogador " + jogador_vez + " jogar");
}

document.addEventListener("DOMContentLoaded", alteraJogador);