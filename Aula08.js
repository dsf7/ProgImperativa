if(false) {
    console.log("entrou no if");
}else{
    console.log("entrou no else");
}

console.log("fora do if");


let idade = 14;

if(idade >=18){
    return console.log("Você é maior de idade");
}else if(idade == 18){
    console.log("Você está aprendendo");
}else{
    console.log("Você não é maior de idade");
}

let result = idade>18 ? "Você é maior de idade" : "Você não é maior de idade";

console.log(result);

switch(idade){

    case 18:
        console.log("idade é igual a 18");
        break;
        case 19:
            console.log("idade é igual a 19");
            break;
            default:
                console.log("nenhum deles");

}

