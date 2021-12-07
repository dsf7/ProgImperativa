// Minha Primeira Aplicação I
// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
	
// • a maior e a menor altura do grupo;
// • a média de altura das mulheres;
// • o número de homens.


const conjunto = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": "1.61"
    },
    {
        
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": "1.75"
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": "1.55"
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": "1.67"
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": "1.75"
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": "1.88"
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": "1.67"
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": "1.63"
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": "1.92"
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": "1.80"
    }
  ]

  var menor = 0; 
  var maior = 3;

  function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

  function maiorMenor(a) {
    
    let menorAltura = 2;
    let maiorAltura = 1;
    let mulheres = 0;
    let alturaMulheres = 0;
    let homens = 0;

    for (let i = 0; i < a.length; i++){
        altura = (a[i].altura)
    // console.log(altura);
    
    if ((a[i].altura) > (maiorAltura)){
        maiorAltura = (a[i].altura);  
        pessoa2 = (a[i].nome);
    }     
        
    if ((a[i].altura) < (menorAltura)){
        menorAltura = (a[i].altura);  
        pessoa1 = (a[i].nome);
    }

    if ((a[i].sexo) == ("F")){
        mulheres = (mulheres + 1);
        alturaMulheres = (alturaMulheres + JSON.parse(a[i].altura));
    }

    if ((a[i].sexo) == ("M")){
        homens = (homens + 1);
    }
}
console.log("A menor altura é = " + menorAltura + " da pessoa " + pessoa1);
console.log("A maior altura é = " + maiorAltura + " da pessoa " + pessoa2);
// console.log("A somatória da altura das Mulheres é = " + alturaMulheres);
console.log(("O número de mulheres é = " + mulheres) + " E a altura média delas é = " + roundToTwo(alturaMulheres / mulheres));
console.log("O número de homens é = " + homens);
    }


maiorMenor(conjunto);
