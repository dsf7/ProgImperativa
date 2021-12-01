let bemVindo = () => "Olá Mundo!";

let dobro = numero => numero * 2;

let soma = (a,b) => a + b;

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ":" + 
    data.getMinutes();
}

console.log(bemVindo(),dobro(5),soma(2,3),horaAtual());

setTimeout(function (){
    console.log("Olá, Atrasado");
}, 4000);

function minhaFuncao (){
    console.log("Testando");
}

setTimeout(minhaFuncao, 3000);

let funcao = () =>{
    console.log("Olá, seta");
}

setTimeout(funcao, 5000);

function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
};

function bomDia(nome, sobrenome, callback) {
    return "Olá, " + callback(nome, sobrenome);
};

function iniciais(nome, sobrenome) {
    return nome[0] + sobrenome[0];
};

console.log(bomDia("Daniel", "Fontoura", nomeCompleto));
console.log(bomDia("Daniel", "Fontoura", iniciais));

// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

function andar(){
    console.log("O carro está andando!");
}

function parar(){
    console.log("O carro parou!");
}

function acaoCarro(callback){
    return callback();
};

acaoCarro(andar);
acaoCarro(parar);
parar();