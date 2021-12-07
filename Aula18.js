// 1. Loop de Pares
// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

function loopPares(a) {
    
    for (let i = 0; i < 101; i++){
    console.log((i),(a + i));
    
        if (((a + i) % 2) === 0){
            console.log("O número da iteração " + i + " somado com o número " + a + " passado é = par");
        }
    }
}

loopPares(5);

// // 2. Loop ímpares com palavra
// // Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// // Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.

function loopImpares(a, b) {
    
    for (let i = 0; i < 101; i++){
    console.log((i),(a + i));
    
        if (((a + i) % 2) !== 0){
            console.log(b + " (palavra sendo mostrada porque o número passado " + a + " + iteração " + i + " é = ímpar)");
        }
    }
}

loopImpares(5, "caramba");



// // 3. Soma
// // 	Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
// // Exemplo: 
// // soma(3) deve retornar 6 pois faz (1 +2 +3)
// // soma(8) deve retornar 36

function soma(a) {

    for (let i = a; i > 0; i++){
    novo.push(i--);
    return array;}
}

console.log(soma(5));




// // 4. Novo Array
// // Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro.
// // Exemplo: 
// // newArray(5) deve retornar [1,2,3,4,5]
// // newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]

function newArray(a) {
    
}


// // 5. String.split()
// // Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
// // Importante: Você não pode usar o String.split()
// // Exemplo: 
// // split(“olá”) deve retornar [”o”,”l”,”á”]
// // split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]

// // 6. Mover os zeros para o final
// // Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final.

// // Exemplo: 
// // moverZeros([false,1,0,1,2,0,1,3,"a"]) deve retornar [false,1,1,2,1,3,"a",0,0]
// // moverZeros([1,2,0,1,0,1,0,3,0,1]) deve retornar [1,2,1,1,3,1,0,0,0,0]

// 2 filter com 0 / sem 0



// // 7 Lidando com dois arrays
// // Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".
// // Exemplo:
// // arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
// // 		Eu sou 1 e eu sou o
// // Eu sou 2 e eu sou l
// // Eu sou 3 e eu sou á

// // 8 Arrays de objetos
// // Você deve criar uma função chamada arrayObjects que receba um número como parâmetro e retorne um array de objetos que tem uma propriedade chamada valor que contém o valor do número e seus anteriores.
// // Exemplo:
// // arrayObjects(5) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// // arrayObjects(3) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}]

// for


// // 9 Arrays de objetos 2
// // Você deve criar uma função chamada arrayObjectsTwo que recebe um número e uma palavra como parâmetro e retorna um array de objetos que possui: uma propriedade nomeada pela palavra passada por parâmetro e o valor dessa propriedade deve ser o número passado por parâmetro e seus anteriores.

// // Exemplo:
// // arrayObjectsTwo(5, “olá”) deve retornar [{olá: 1}, {olá: 2}, {olá: 3}, {olá: 4}, {olá: 5 }]
// // arrayObjectsTwo(3, “tchau”) deve retornar [{tchau: 1}, {tchau: 2}, {tchau: 3}]






// function encontrarGanhador(a, b) {

//     let pontosA = 0;
//     let pontosB = 0;

//     for (let r = 1; r < a.length; r++) {
//         if (a[r] > b[r]){
//            pontosA = (pontosA + 1);
//         }
//         if (b[r] > a[r]){
//            pontosB = (pontosB + 1);
//         }  
//     }
// console.log(a[0], "tem", pontosA, "ponto(s) e", b[0], "tem", pontosB, "ponto(s)");

//     if (pontosA > pontosB) {
//         console.log("O ganhador é ", a[0])
//     }
//     if (pontosB > pontosA)  {
//             console.log("O ganhador é", bob[0])
//     }
//     if (pontosA == pontosB) {
//         console.log("Empatou")
//     }
// }

// encontrarGanhador(alice,bob);


// for (let f = 0; f < filmes.length; f++) {
//     console.log((filmes[f]).toUpperCase());
// }

// function converterMaisculas(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].toUpperCase()
//     }
//         console.log(array);
//     }


// // 2. Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme // original.

// let animados = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// for (let a = 0; a < animados.length; a++) {
//     filmes.push(animados[a]);
// }

// function passagemDeElementos(array1,array2) {
//     let invalido = array2.pop();
//     let qtd = array2.length;

//     for (let i = 0; i < qtd; i++) {
//         array1.push(array2.pop().toUpperCase())
//     }
//     return array1
// }

// // 3. Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro!

// let intruso = animados[(animados.length) - 1];
// console.log(intruso);
// // let invalido = array2.pop(); outra froma, dentro da function


// for (let a = 0; a < (animados.length) - 1; a++) {
//     filmes.push(animados[a]);
// }

// for (let f = 0; f < filmes.length; f++) {
//     console.log((filmes[f]).toUpperCase());
// }

// console.log("esse filme é inválido:", intruso);



// // 4. Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.

// 	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// 	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

//     function compararQualificacoes (cont1, cont2) {
//         let comparacoes = [];
//         for (let conta = 0; conta < cont1.length; conta++) {
//             comparacoes[conta] = cont1[conta] = cont1[conta] === cont2[conta]
//         }
//     }
