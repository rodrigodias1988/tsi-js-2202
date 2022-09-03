let amigos = ['Bono', 'Paulo', 'Marta', 'Yuri', 'Matheus'];

console.log(amigos.length);

//Looping com o vetor

for(let i = 0; i < amigos.length; i++){

    console.log(`Linha: ${i}`);
    
    // <- template string interpolação
    console.log(`amigo: ${amigos[i]}`);
}

//Foreach For = para each = cada
amigos.forEach(function( valor, indice){

   console.log(`${indice}: ${valor}`);
});

 amigos.map(function(val){

    console.log(val);
 });