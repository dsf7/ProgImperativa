// Daniel Fontoura - Turma 7


function teste1(x, y) {
    return y - x
}

console.log(teste1(10,40));

function teste2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
}

console.log(teste2(10));


// 1 Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function polcm(x) {
    return((x * 2,54) + " cm");
}

console.log(polcm (20));


// Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function url(x) {
    return("http://www." + x + ".com.br");
}

console.log(url ("funcaojs"));

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function animado(x) {
    return(x + "!");
}

console.log(animado ("Hoje tem festa"));

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadecanina(x) {
    return("A idade desse cachorro é equivalente a " + x * 7 + " anos humanos");
}

console.log(idadecanina ("11"));


// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. PS: considere que você trabalhe 160 horas no mês.

function valorHora(x) {
    return("R$" + Math.round(x / 160) + " por hora");
}

console.log(valorHora (9999));


// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

function IMC(x, y) {
    return("O IMC dessa pessoa é " + Math.round(x / (y * y)));
}

console.log(IMC (57.5, 1.70));


// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. Investigue o que o método de .toUpperCase() faz.

console.log("um texto qualquer sem nada maiúsculo".toUpperCase());

function caps(x) {
    return(x.toUpperCase());
}

console.log(caps ("outro texto qualquer com tudo minúsculo"));


// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipo(x) {
    return(typeof x);
}

console.log(tipo (9999));
console.log(tipo ("Daniel"));
console.log(tipo (true));



// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.


function circunferencia(raio) {
    return 2 * Math.PI * raio
}

console.log(circunferencia (10));


