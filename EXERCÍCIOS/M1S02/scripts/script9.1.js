// [M1S02] - Ex 9 - Construa uma calculadora
// // Faça 3 prompts ao usuário: 
// // 1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
// // 2. no segundo, pergunte o primeiro valor que deseja calcular;
// // 3. no terceiro, o segundo valor que deseja calcular. 
// // Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.
// // Dica:
// // https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
// // https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math

alert("Seja bem vindo a Calculadora!");
let operador = prompt('Informe que tipo cálculo deseja executar: + - / *');

let valor1 = prompt('Informe o primeiro valor:');
if (isNaN(valor1)) {
  alert("Digite um número por favor")
}

let valor2 = prompt('Informe o segundo valor:');
if (isNaN(valor2)) {
  alert("Digite um número por favor")
}


switch (operador) {
  case "+":
    resultado = parseInt(valor1) + parseInt(valor2);
    break;

  case "-":
    var resultado = parseInt(valor1) - parseInt(valor2);
    break;

  case "*":
    if (valor1 == 0) {
      alert("0 vezes 0 sempre será 0, insira outro valor")
      break;
    } else if (valor2 == 0) {
      alert("Não é possível multiplicar por zero!")
      break;
    } else {
      resultado = parseInt(valor1) * parseInt(valor2);
    }
    break;

  case "/":
    if (valor1 == 0) {
      alert("Não é possível dividir por zero!")
      break;
    } else if (valor2 == 0) {
      alert("Não é possível dividir por zero!")
      break;
    } else {
      var resultado = parseInt(valor1) / parseInt(valor2);
    }
    break;
  default:
    alert('Operação inválida');
    break;
}
if (isNaN(resultado)) {
  alert("Entrada Inválida!")

} else {
  alert(`O resultado do seu cálculo é: ` + resultado);
}