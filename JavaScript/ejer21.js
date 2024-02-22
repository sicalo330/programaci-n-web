function posiciones(arrelo){
    aux = []
    nuevoArreglo = []
    for(let i = 0; i<= arreglo.length - 1; i++){
        if(arreglo[i]%2 == 0){
            let aux = nuevoArreglo.push(arreglo[i])
        }
        else{
            delete arreglo[i]
        }
    }
    console.log(nuevoArreglo)
    
}

arreglo = [1,2,0,6,9,1,34,0,5]

posiciones(arreglo)