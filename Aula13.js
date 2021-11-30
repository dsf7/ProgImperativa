// let carro = {
//     modelo : "Ford",
//     cor : "branca",
//     andar : function(){
//         return "carro " + this.modelo + " " + this.cor + " em movimento"
//     }
// }

// console.log(carro.andar() );

function Carro(modelo, cor){
    this.modelo = modelo
    this.cor = cor;
    this.pular = function(){
        return "meu "+this.modelo + " está pulando";
    }
}

let carro1 = new Carro('GM', "Azul");
let carro2 = new Carro('Ford', "Vermelho");

console.log(carro1.pular() );

let dadosCarro = {
    "cor" : "verde",
    "placa" : "DSF-1986",
    "portas" : 4
}

let strCarro = JSON.stringify(dadosCarro);
console.log(strCarro);

