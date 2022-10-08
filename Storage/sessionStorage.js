//Como trabalhar com SESSION STORAGE

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada =  document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';

        //após obtermos o dado do usuário
        //vamos guardá-lo no local storage
        sessionStorage.setItem('dadoDoUsuario', valor);
}

//Para recuperar o dado de local storagem
//Usamos o sessionstorage.getItem()
document.querySelector('mostrar').innerText = 
    sessionStorage.getItem('dadoDoUsuario');

//E para apagar no local storage?
//removeItem()
//sessionStorage.removeItem('dadoDoUsuario');

    