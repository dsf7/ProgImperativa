const alice = ["Alice", 23, 82, 46];
const bob = ["Bob", 45, 8, 32];

function encontrarGanhador(a, b) {

    let pontosA = 0;
    let pontosB = 0;

    for (let r = 1; r < a.length; r++) {
        if (a[r] > b[r]){
           pontosA = (pontosA + 1);
        }
        if (b[r] > a[r]){
           pontosB = (pontosB + 1);
        }  
    }
console.log(a[0], "tem", pontosA, "ponto(s) e", b[0], "tem", pontosB, "ponto(s)");

    if (pontosA > pontosB) {
        console.log("O ganhador é ", a[0])
    }
    if (pontosB > pontosA)  {
            console.log("O ganhador é", bob[0])
    }
    if (pontosA == pontosB) {
        console.log("Empatou")
    }
}

encontrarGanhador(alice,bob);