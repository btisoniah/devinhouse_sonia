var contador = 0;
var tempo;
var tempo_on = 0;

function tempoContador() {
    document.getElementById("txt").value = contador;
    contador += 1;
    tempo = setTimeout(function() { tempoContador() }, 1000);
}

function inicioContador() {
    if (!tempo_on) {
        tempo_on = 1;
        tempoContador();
    }
}

function paraContador() {
    clearTimeout(tempo);
    tempo_on = 0;
    contador = 0;
    document.getElementById("txt").value = "";
}