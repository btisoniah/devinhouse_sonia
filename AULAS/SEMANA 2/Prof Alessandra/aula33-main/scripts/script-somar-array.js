btnSomarArray.addEventListener('click', function(){
   
    const resultado = document.getElementById("resultado");
    
    var numeros = [3,7,90,6,2]
 
    resultado.innerHTML =  somarArray(numeros);
    resultado.style.backgroundColor = "yellow";
});