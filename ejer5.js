function likes(numero){
    if(numero < 1000){
        console.log(numero)
    }
    if(numero >= 1000 && numero <= 999999){
        valor = numero/1000
        console.log(Math.floor(valor)+"k")
    }
    if(numero >= 1000000){
        valor = numero/1000000
        console.log(Math.floor(valor)+"M")
    }
}

numero = 29000000

likes(numero)