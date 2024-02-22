function calcularImpuestos(edad,ingreso){
    if(edad >= 18 && ingreso >= 1000){
        total = (ingreso*40)/100
        return total
    }
    else{
        return 0
    }
}

edad = 18
ingreso = 1000
console.log(calcularImpuestos(edad, ingreso))