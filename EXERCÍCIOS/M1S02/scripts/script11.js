var valorInicial = Number(prompt('Informe o valor inicial da PA'));
const valorRaiz = Number(prompt('Informe o valor para a Raíz'));

if (isNaN(valorInicial) || isNaN(valorRaiz)) {
  alert('Digite somente números');
} else {
  var arrayPa = [valorInicial];

  for (let i = 0; i < 9; i++) {
    valorInicial += valorRaiz;
    arrayPa.push(valorInicial);
  }
  alert('A progressão Aritmética é: ' + arrayPa);
}