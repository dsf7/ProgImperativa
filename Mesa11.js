// 1. Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte: let peliculas = [&quot;star wars&quot;, &quot;totoro&quot;,  &quot;rocky&quot;, &quot;pulp fiction&quot;,  &quot;la
// vida es bella&quot;]
// e nos pediram para passar todos os elementos para letras maiúsculas, o que na época tínhamos feito de forma &quot;manual&quot;. Vamos movê-lo para uma maneira mais automática usando loops.

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];


for (let f = 0; f < filmes.length; f++) {
    console.log((filmes[f]).toUpperCase());
}

function converterMaisculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }
        console.log(array);
    }


// 2. Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme // original.

let animados = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

for (let a = 0; a < animados.length; a++) {
    filmes.push(animados[a]);
}

function passagemDeElementos(array1,array2) {
    let invalido = array2.pop();
    let qtd = array2.length;

    for (let i = 0; i < qtd; i++) {
        array1.push(array2.pop().toUpperCase())
    }
    return array1
}

// 3. Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro!

let intruso = animados[(animados.length) - 1];
console.log(intruso);
// let invalido = array2.pop(); outra froma, dentro da function


for (let a = 0; a < (animados.length) - 1; a++) {
    filmes.push(animados[a]);
}

for (let f = 0; f < filmes.length; f++) {
    console.log((filmes[f]).toUpperCase());
}

console.log("esse filme é inválido:", intruso);



// 4. Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.

	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

    function compararQualificacoes (cont1, cont2) {
        let comparacoes = [];
        for (let conta = 0; conta < cont1.length; conta++) {
            comparacoes[conta] = cont1[conta] = cont1[conta] === cont2[conta]
        }
    }



// Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
// 	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// 	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
// Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
// Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar extremamente feliz com nosso trabalho e desempenho.
// Bom trabalho!
