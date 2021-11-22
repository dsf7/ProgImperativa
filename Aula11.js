// 1 Repetir como um papagaio

// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for(let contador = 1; contador <=5; contador++){
    console.log("Olá mundo ", contador);
}

for(let contador = 1; contador <=5; contador++){
    let result = contador *2;
    console.log("Olá mundo ", contador, "* 2 = ", result);
}

let arrayNome = ["Marcos", "Daniel", "João", "Fulano"];
console.log(arrayNome[1]);

for (let j = 0; j < arrayNome.length; j++) {
    console.log(j, " - ",arrayNome[j]);
}

// length retorna também quantidade de posições no array (além de contar tamanho da string)


// while(contador <= 5){
//     console.log(contador, "Olá pessoal", contador);
//     contador++;
// }

let contador = 1;
while(contador <= 5){
    console.log(contador, "Olá pessoal ");
    contador++;
}
console.log("-----------------");


// Contando números ímpares

// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

for (let i =1; i <= 10; i++) {//loop percorre entre 1 e 10
    if(i%2 != 0){ //% simboliza o resto da divisão
        console.log(i, "é número ímpar");
    }
}


// Criando a tabuada

// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

let tabuada

for (let t = 1; t <= 10; t++) { 
    for let n = 1; t <= 10; t++)
    } console.log("t * n =",t*n);
}


let listaFilmes1 = ["filme1", "filme2", "filme3"];

