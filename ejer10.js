function numeroCaracteres(palabra,letra){
    repetidos = 0
    letras = palabra.split("")
    for(i = 0; i <= letras.length; i++){
       if(letras[i] == letra){
           repetidos += 1
       }
    }
    console.log(repetidos)
}

palabra = "Mediterraneo"
letra = "M"

numeroCaracteres(palabra,letra)