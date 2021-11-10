// Daniel Fontoura - Turma 7


function adicionar(x, y) {
    return x + y
}

function subtrair(x, y) {
    return x - y
}

function multiplicar(x, y) {
    return x * y
}

function dividir(x, y) {
    return x / y
}

function quadradoDoNumero(x) {
    return multiplicar(x,x)
}

function mediaDeTres(x, y, z) {
    return (adicionar(x,y)+adicionar(x,z)+adicionar(y,z))/6
}

function calculaPorcentagem(x, y) {
    return (multiplicar(x,y))/100
}

function geradorPorcentagem(x, y) {
    return (dividir(x,y))*100
}

console.log("-------------- Teste de Operações / Calculadora --------------");

console.log(adicionar(10,40));
console.log(subtrair(10,40));
console.log(multiplicar(10,40));
console.log(dividir(10,0));
console.log(quadradoDoNumero(10));
console.log(mediaDeTres(2,4,6));
console.log(calculaPorcentagem(300,15));
console.log(geradorPorcentagem(2,200)+"%");