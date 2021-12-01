let numeros = [1,5,9,13,17,21];

let triplo = numeros.map(function(item){
    return item * 3;
});

console.log(triplo);

let idades = [22, 8, 17, 14,30];

let maiores = idades.filter(function(idade){
    return idade >= 18;
});

console.log(maiores);

let total = idades.reduce(function(acumulador, item){
    console.log(acumulador, item);
    return acumulador+item;
});

console.log(total);

let grupo = [5, 7, 16];

let soma = grupo.reduce(function(acumulador, numero){
        return acumulador+numero;
    });

console.log(soma);

let paises = ["Brasil", "Cuba", "Peru","India"];

paises.forEach(function(item){
    console.log("<li>"+item+"</li>");
});


// Micro desafios

// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let pares = [2, 4, 8, 16, 32, 64];

let impares = pares.map(function(item){
    return item + 1;
});

console.log(impares);

let nomes = ["Maria", "Mariano", "Marcela", "Marcos", "Maria Aparecida", "Maria"];

let marias = nomes.filter(function(nomes){
    return nomes == "Maria";
});

console.log(marias);

let num = [1,5,9,3,7];

let juntar = num.reduce(function(juntados, numero){
        return juntados + " - " + numero;
    });

console.log(juntar);

let animais = ["golfinho", "tubarão", "baleia","foca"];

animais.forEach(function(item){
    console.log("O animal é "+item);
});


// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

let composto = [2, 4, 8, 16, 32, 64];


function dividindo(array){
    let todos = composto.reduce(function(total, numero){
        return total + numero;
    });
    
    let matriz = composto.map(function(item){
        return item / todos;
    });

    console.log(matriz);
}

dividindo(composto);

  

// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let palavrasNumeros = ["Discord", "Zoom", "Playground", "Checkpoint", "Exercício", 7];

function separando(array){
    let maioresQue = array.filter(function(palavras){
        return palavras.length > array[5];});

    console.log(maioresQue);
        
};

separando(palavrasNumeros);


// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 

