function executar()
{
  const resultado = document.getElementById("resultado");

  let primeiroValor = prompt('Digite o primeiro número')
  let segundoValor = prompt('Digite o segundo número')
 
  resultado.innerHTML =  somar(Number(primeiroValor),Number(segundoValor));
  resultado.style.backgroundColor = "yellow";
}