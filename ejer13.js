function removerCeros(arrelo){
    aux = []
    nuevoArreglo = []
    for(let i = 0; i<= arreglo.length - 1; i++){
        if(arreglo[i] == 0){
            delete arreglo[i]
        }
        else{
            let aux = nuevoArreglo.push(arreglo[i])
        }
    }
        console.log(nuevoArreglo)
    
}

arreglo = [1,2,0,6,9,1,34,0,0,1,0,2]

removerCeros(arreglo)