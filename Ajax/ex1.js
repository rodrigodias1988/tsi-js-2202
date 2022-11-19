document.querySelector('button').addEventListener('click',recuperaConteudoAjax);

function recuperaConteudoAjax (){
    const XHR = new XMLHttpRequest ();

    XHR.open('GET','http://127.0.0.1:5500/ajax/conteudo.txt', true);

    XHR.onload = function (){
        if (this.status==200){

            let datos = JSON.parse(this.responseText);
            let saida= '';
            datos.forEach(function(aluno) {
                saida  = aluno.idade >=18 ? `${aluno.nome} é maior de idade <br/.` : `${aluno.nome} é menor de idade <br>`

            });
            document.querySelector('#dadoRecuperado').innerHTML = saida;
        }
    }
    XHR.send();
};
