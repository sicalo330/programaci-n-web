function distancia(palabra1, palabra2){
    supremacia = ""
    if(palabra1.length >= palabra2.length ){
        supremacia = palabra1
    }
    if(palabra2.length >= palabra1.length ){
        supremacia = palabra2
    }
    for(let i = 0; i<supremacia.length;i++){
        if(palabra1[i] == palabra2[i] ){
            total += 1
        }
    }
    console.log(total)
}

let total = 0
mensaje1 = "soleri"
mensaje2 = "colegio"
palabra1 = mensaje1.split("")
palabra2 = mensaje2.split("")
console.log(distancia(palabra1, palabra2))