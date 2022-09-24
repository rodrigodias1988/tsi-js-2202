//Selecionando múltiplos

let e;

//Com getelementsByClassName
e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val){

    val.style.color = 'green';

    //val.innerText = 'Outra tarefa';

    console.log(val.innerText);
    
});

//Com querySelectorAll

e = document.querySelectorAll('li');

console.log(e[2]);

e.forEach(function(val){

    console.log(val.innerText);
});

//Somente ímpares

e = document.querySelectorAll('li:nth-child(odd)');

e.forEach(function(val){

    val.style.background = '#dedede';
});

e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa(val){

    console.log(val);
}

e = document.querySelector('ul.collection');

//console.log(e.firstChild);
//console