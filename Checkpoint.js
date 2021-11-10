// DANIEL FONTOURA - Turma 7

// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function Menu(prato) {

    if (prato == "1"){
        pipoca(10)

    }else if (prato == "2"){
        macarrão(8)

    }else if (prato == "3"){
        carne(15)
        
    }else if (prato == "4"){
        feijão(12)
    
    }else if (prato == "5"){
        brigadeiro(8)

    }else
    console.log("Prato inexistente")
}

function pipoca(tempo) {

    if (tempo >= 20 && tempo < 30){
        console.log("Tempo demais, a pipoca queimou!")
    }else if(tempo >=  30){
        console.log("kabumm")
    }else if(tempo <  10){
        console.log("Tempo insuficiente")
    }else
    console.log("Pipoca pronta, bom apetite!!!")
}

function macarrão(tempo) {

    if (tempo >= 16 && tempo < 24){
        console.log("Tempo demais, o macarrão queimou!")
    }else if(tempo >=  24){
        console.log("kabumm")
    }else if(tempo <  8){
        console.log("Tempo insuficiente")
    }else
    console.log("Macarrão pronto, bom apetite!!!")
}

function carne(tempo) {

    if (tempo >= 30 && tempo < 45){
        console.log("Tempo demais, a carne queimou!")
    }else if(tempo >=  45){
        console.log("kabumm")
    }else if(tempo <  15){
        console.log("Tempo insuficiente")
    }else
    console.log("Carne pronta, bom apetite!!!")
}

function feijão(tempo) {

    if (tempo >= 24 && tempo < 36){
        console.log("Tempo demais, o feijão queimou!")
    }else if(tempo >=  36){
        console.log("kabumm")
    }else if(tempo <  12){
        console.log("Tempo insuficiente")
    }else
    console.log("Feijão pronto, bom apetite!!!")
}

function brigadeiro(tempo) {

    if (tempo >= 16 && tempo < 24){
        console.log("Tempo demais, o brigadeiro queimou!")
    }else if(tempo >=  24){
        console.log("kabumm")
    }else if(tempo <  8){
        console.log("Tempo insuficiente")
    }else
    console.log("Brigadeiro pronto, bom apetite!!!")
}

// testes

Menu(1);
Menu(2);
Menu(3);
Menu(4);
Menu(5);
Menu(6);
Menu(9);

feijão(15);
feijão(25);
feijão(38);
feijão(9);
feijão(12);