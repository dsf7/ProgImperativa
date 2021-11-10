function podeSubir(altura, acompanhada) {

    if (altura > 1.40){
        console.log("Acesso autorizado")

    }else if ((altura > 1.20) && (acompanhada == true)){
        console.log("Acesso autorizado com acompanhante")

    }else{
        console.log("Acesso negado")}
    }
   

podeSubir(1.50, false)
podeSubir(1.30, true);
podeSubir(1.30, false);
podeSubir(1.10, true);

