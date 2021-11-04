// Faça 2 prompts ao usuário:
// 1. no primeiro, pergunte o ano de nascimento;
// 2. no segundo, pergunte o ano atual.

// Em seguida, exiba na tela um “alert” contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário, caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.

// Dica:
// Window.alert - APIs da Web | MDN
// Matemática básica no JavaScript — números e operadores - Aprendendo desenvolvimento web | MDN

// Atividade


var anoNascimento = prompt('Informe o ano do seu nascimento (4 dígitos)');

let validar = false;

while (!validar) {
  var anoNascimento = parseInt(prompt("Qual sua idade?"));
  if (isNaN(anoNascimento)) {
    alert("Digite um número por favor");
    validar = false;
  } else {
    validar = true;
  }
};

var anoAtual = prompt('Informe o ano atual (4 dígitos)');
var idadeAtual = (anoAtual - anoNascimento);

alert("Sua idade é " + idadeAtual + " ou " + (idadeAtual + 1) + " anos!");