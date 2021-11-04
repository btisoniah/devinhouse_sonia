function AskingUser() {
    // declaração de variáveis
    var nome = prompt('Qual seu nome?');
    let validar = false;

    // validar se o idade é number
    while (!validar) {
        var idade = parseInt(prompt("Qual sua idade?"));
        if (isNaN(idade)) {
            alert("Digite um número por favor");
            validar = false;
        } else {
            validar = true;
        }
    };

    var gostaEsporte = confirm("Gosta de praticar esporte?");

    let msg = `Seu nome é ${nome}, você tem ${idade} anos e ${gostaEsporte?"pratica esporte":"não pratica esporte"}`;


    //  finalizado as validalções, mostra na tela
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.innerText = msg;

};