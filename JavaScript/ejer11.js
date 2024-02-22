function sumarArreglo(arreglo){
    suma = 0
        for(let i = 0; i<arreglo.length; i++){
            suma += arreglo[i] 
        }
        console.log(suma)
    }
    
    const arreglo = [2,4,6,3]
    
    sumarArreglo(arreglo)