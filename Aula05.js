
function somar(a, b) {
    console.log("dentro da function");
    return ( a + b );
}

console.log( somar(10, 5) );

function nomePessoa(nome, idade) {
    return nome+" tem "+idade+" anos ";
}

console.log( nomePessoa("Daniel", 35));
console.log( nomePessoa("Enzo", 11));
console.log( nomePessoa("Tania", 56));

let sub = function(x, y){
    console.log( x - y );
}

sub(10, 5);

console.log( Math.random() );