function imprimirMatriz(matriz) {
    matriz.forEach(fila => {
      fila.forEach(elemento => {
        console.log(elemento);
      });
    });
  }
  
  
  console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))