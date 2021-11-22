let nome = " Daniel Fontoura ";
console.log( nome.length);
console.log( nome);
console.log( nome.trim( ));
console.log( nome.split(" "));
console.log( nome.split("a"));

let lista = ["Daniel", "Fulano", "Leandro", "Guilherme", 25, true]; // isso é um array
console.log(lista);
console.log(lista[1]); // exibi uma posicão

lista.push("teste");
console.log(lista);

let x = lista.pop();
console.log(lista);
console.log(x);

let y = lista.shift();
console.log(lista);
console.log(y);

lista.unshift("Daniel voltou", y, x);
console.log(lista);

let strLista = lista.join();
console.log(strLista);

lista.push("Daniel");
console.log(lista);

console.log( lista.indexOf("Daniel") );
console.log( lista.lastIndexOf("Daniel") );
console.log( lista.includes("Daniel") );



// Acessar elementos específicos de um array.
console.log(lista[8]);
// Modificar cada um dos elementos de um array e imprimi-los no console.
lista[0] = "DanielSF";
lista[1] = "Dani";
lista[2] = "testando";
lista[3] = "Fulaninho";
lista[4] = "Leandrinho";
lista[5] = "Leandrinho";
lista[6] = 52;
lista[7] = false;
lista[8] = "Danielzinho";
console.log(lista);

// Adicionar elementos a um array.
lista.push("add");
console.log(lista);

// Extrair elementos de um array.
let xt = lista.pop();
console.log(lista);
console.log(xt);

// Comparar elementos de um array com os elementos de outro. 
console.log( lista[0].includes(lista[1]) );


// O que esses códigos retornam?
// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.
let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); 
// = acho que não retorna nada, porque não tem o campo 10 (testei e deu undefined)


let grupoDeAmigos1 = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos1[1][0])

// acho que nesse caso irá retornar "Ron" "Harry" -- não tinha percebido que era um grupo dentro dos grupos. agora entendi que 1 indica o grupo maior e 0 o item dentro dele

let str = "una string qualquer";
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);

// essa não consegui entender, achei que seria a posicão 13 no grupo 2, mas não encontrei ela no 13


// Array Invertido
// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

function imprimirInverso(array)

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

// somarArray()
// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
// Exemplo:
// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])     // 27
// somarArray([-5,100])             // 95
// Simulação Array.join()
// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
// Importante: Não poderá utilizar o método Array.join() original.
// Por exemplo:
// join(["o","l","á"]) deve retornar a string "olá".
// join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

// Coleções de Filmes (e mais…)
// O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
// Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
// 	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 

// Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.

// Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().

// Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
// 	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

// Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
// PS: por precaução, salve o elemento que você vai deletar em uma variável.

// Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
// 	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// 	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
// Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
// Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar extremamente feliz com nosso trabalho e desempenho.
// Bom trabalho!


