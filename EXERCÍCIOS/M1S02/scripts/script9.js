alert("Seja bem vindo a Calculadora!");
var operador = prompt('Informe que tipo cálculo deseja executar: + - / *'); 
var valor1 = parseFloat.prompt('Informe o primeiro valor'); 
var valor2 = parseFloat.prompt('Informe o segundo valor'); 
var resultado = 0; 

  if (operador == "+") {
    var resultado = parseInt(valor1) + parseInt(valor2);
      alert("A Soma entre" + valor1 + "e " + valor2 + " é igual a " + resultado);

  } else if
      (operador == "-") {
        var resultado = parseInt(valor1) - parseInt(valor2);
        alert("A Subtração entre" + valor1 + "e " + valor2 + " é igual a " + resultado);

  } else if
      (operador == "*") {
        var resultado = parseInt(valor1) * parseInt(valor2);
        alert("A Multiplicação entre" + valor1 + "e " + valor2 + " é igual a " + resultado);

  } else if
      (operador == "/") {
        var resultado = parseInt(valor1) / parseInt(valor2);
        alert("A Divisão entre" + valor1 + "e " + valor2 + " é igual a " + resultado);
  } else {
      throw new Error('Operação inválida');
  }


alert("O resultado obtido foi " + resultado); 

