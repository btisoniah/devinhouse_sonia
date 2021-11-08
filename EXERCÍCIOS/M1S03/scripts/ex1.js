// // Faça uma página HTML contendo um label que exiba a mensagem 
// “Insira sua data de nascimento”,
//  um campo de texto que só permita inserir data 
//(dica: input type date) 
//  e um botão rotulado “calcular idade”. 
//  Programe uma função a ser executada quando o usuário clicar no botão, 
//  que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.



var data = new Date(); //data de hoje 
var dataNascimento = document.getElementById("data");  //data do aniversário 



var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;
console.log(dataAtual);



var diff = moment(dataAtual,"DD/MM/YYYY HH:mm:ss").diff(moment(dataNascimento,"DD/MM/YYYY HH:mm:ss"));
var qtdadeDias = moment.duration(diff).asDays();
var diasEmAnos = qtdadeDias / 365; 


const now = new Date(); // Data de hoje
const past = new Date('2014-07-07'); // Outra data no passado
const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

// Mostra a diferença em dias
console.log('Entre 07/07/2014 até agora já se passaram ' + days + ' dias');
