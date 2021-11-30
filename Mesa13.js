// let contasBancarias = {
//     numeroConta : 1,
//     tipoConta : "Corrente",
//     saldo : 999.99,
//     titular : "Daniel FOntoura"
// }

// let contaTeste = {
//     nConta : 342394,
//     tipoConta : "corrente"
// }

// console.log(contaTeste);


function Conta(numero, tipo, saldo, titular){
    this.numero = numero,
    this.tipo = tipo,
    this.saldo = saldo,
    this.titular = titular
}

let conta1 = new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte");
let conta2 = new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell");
let conta3 = new Conta(9582019689, "Conta Poupança", 27363, "Jarret Lafuente");
let conta4 = new Conta(1761924656, "Conta Poupança", 32415, "Ansel Ardley");
let conta5 = new Conta(7401971607, "Conta Poupança", 18789, "Jacki Shurmer");
let conta6 = new Conta(630841470, "Conta Corrente", 28776, "Jobi Mawtus");
let conta7 = new Conta(4223508636, "Conta Corrente", 2177, "Thomasin Latour");
let conta8 = new Conta(185979521, "Conta Poupança", 25994, "Lonnie Verheijden");
let conta9 = new Conta(3151956165, "Conta Corrente", 7601, "Alonso Wannan");
let conta10 = new Conta(2138105881, "Conta Poupança", 33196, "Bendite Huggett");


const contas = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10];

console.log(contas);

let banco = {
    clientes : contas
} 

console.log(banco.clientes[0]);

lista = [];
lista.push(new Carro)("Ford", "vermelho", "cereja"));
lista.push(new Carro)("Tesla", "vermelho", "binario"));
lista.push(new Carro("Tesla", "vermelho", "binario"));


console.log(lista[0].nome == "cereja");

