/*/Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior/*/


function esMultiplo(dividendo: number, divisor: number): boolean{
  if(dividendo % divisor === 0) {
    return true;
  }else{
    return false;
  }
}
  function cantDeDivisores(numeroAgregado: number): number {
    let cantidad: number = 0;
    let divisores: number;
    for (divisores = 0; divisores <= numeroAgregado; divisores++) {
      if (esMultiplo(numeroAgregado, divisores) === true) {
        cantidad++;
      }
    }
    return cantidad;
  }



 let numeroAgregado: number=Number(prompt("Poner numero"));
  console.log (" El numero "+ numeroAgregado + " cuenta con " + cantDeDivisores(numeroAgregado) +" de divisores ");
