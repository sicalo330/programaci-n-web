function fizzBuzz(numero){
    multiplo3 = numero%3
    multiplo5 = numero%5
    ambos = false
    if(multiplo3 == 0 && multiplo5 == 0){
        console.log("fizzBuzz")
        ambos = true
    }
    if(multiplo3 == 0 && ambos == false){
        console.log("fizz")
    }
    if(multiplo5 == 0 && ambos == false){
        console.log("buzz")
    }
}

numero = 20

fizzBuzz(numero)