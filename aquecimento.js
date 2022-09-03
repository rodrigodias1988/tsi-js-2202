//Ciclo de repetição 
//For
let nome = "Rodrigo";
let i;
for (i=1 ; i <= 10 ; i++)
{
    document.write (nome + " "+ i + "<br>");
    console.log (nome + "<br>")
}
//While
let linha = "Ramirez";
i =1;
while (i <=10)
{
    document.write (linha + " " + i + "<br>");
    console.log(linha);
    i++;
}
//Do while
i = 0;
do 
{
    document.write ("Main "+ i + "<br>");
    console.log ("Main <br>");
    i++
} while (i < 10)
//Condicionais
//IF
let a = 5;
let b = 5;
if( a > b)
{
    document.write(a +" é maior que "+ b + "<br>");
    console.log ( a +" é mairo que "+ b + "<br>");
} 
else if (a==b)
{
    document.write (b +" é igual a  " + a + "<br>");
    console.log (b +" é igual a  " + a + "<br>");
}
else
{
    document.write (b +" é maior que " + a + "<br>");
    console.log (b +" é mairo que " + a + "<br>");
}
//Switch
let Dia= parseInt(prompt("Digite um número de 1 a 7"));
switch (Dia){
    case 1:
        document.write ("Domingo");
        console.log ("Domingo");
    break;
    case 2:
        document.write ("Segunda <br>");
        console.log ("Segunda <br>");
    break;
    case 3:
        document.write ("Terça <br>");
        console.log ("Terça <br>");
    break;
    case 4:
        document.write ("Quarta <br>");
        console.log ("Quarta <br>");
    break;
    case 5:
        document.write ("Quinta <br>");
        console.log ("Quinta <br>");
    break;
    case 6:
        document.write ("Sexta <br>");
        console.log ("Sexta <br>");
    break;
    case 7:
        document.write ("Sábado <br>");
        console.log ("Sábado <br>");
    break;
    default:
        document.write ("Valor inválido! <br>");
        console.log ("Valor inválido! <br>");
}
//Operador ternario
let x = 4;
let y = 2;
let resultado = x > y ? x + " é maior que " + y + "<br>" : y + " é maior que " + x + "<br>";
document.write (resultado);
console.log (resultado)
let genero = prompt("Digite M o F");
let sexo = genero== 'M' ? 'É homem' : 'É mulher'; 
document.write (sexo);
console.log (sexo);
//Coalescentes
let coisa = null;
let variavel = coisa ?? "Não existe"
document.write (variavel);
console.log (variavel);
