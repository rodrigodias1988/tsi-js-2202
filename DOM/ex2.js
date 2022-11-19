let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function(evento){
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');

    /*recuperar os dados da matriz*/

    let preco = calculaPreco( serv.value, prazo.value);

    res.innerText =`O preço é ${preco}`;

    console.log(evento);
    
    //OBTER OS VALORES DE SERVIÇO E PRAZO

    
});


function calculaPreco ( servico, prazo ){

    let tabela = [  ['$$$','$$','$'],
                    ['$$$$','$$$','$$'],
                    ['Não faz','Não faz','$$$']];

    return tabela[servico][prazo];

}




/*
btnCalcular.addEventListener('click', executa ());

function executa(evento){
   alert(evento);
}

//console.log(btnCalcular);
*/