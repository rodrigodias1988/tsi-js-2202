console.log(window);
// Como ultilizar atributos de um objeto
//alert(`Sua resolução é:  ${window.innerHeight} por ${window.innerWidth}`);

let meuTitulo = document.getElementById('titulo');


if(confirm('Deixe sua mensagem!')){

    let msg = prompt('Mensagem');
    meuTitulo.innerText = msg + ' Navegador é ' + window.navigator.vendor;
    meuTitulo.style.background = 'green';


}else{

    meuTitulo.innerText = '***';
    meuTitulo.style.background = '#dedede';
}

//meuTitulo.innerText = 'Mudou!';

//meuTitulo.style.background = '#dedede';

//console.log(meuTitulo);