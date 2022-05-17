function dibujarGuion() {
  let guion: string = "-";
  for (let indice: number = 0; indice <= 40; indice++) {
    guion = guion + "-";
  }
  console.log(guion);
}

let num1: number = Number(prompt("Primer numero"));
let num2: number = Number(prompt("Segundo numero"));
let resultado: number = 0;
let operacion: number = Number(
  prompt("Poner 1 para sumar, 2 para restar,3 para multiplicar,4 para dividir")
);
switch (operacion) {
  case 1:
    resultado = num1 + num2;
    dibujarGuion();
    console.log("El resultado es", resultado);
    dibujarGuion();
    break;
  case 2:
    resultado = num1 - num2;
    dibujarGuion();
    console.log("El resultado es", resultado);
    dibujarGuion();
    break;
  case 3:
    resultado = num1 * num2;
    dibujarGuion();
    console.log("El resultado es", resultado);
    dibujarGuion();
    break;
  case 4:
    resultado = num1 / num2;
    dibujarGuion();
    console.log("El resultado es", resultado);
    dibujarGuion();
    break;
  default:
    console.log("Opción Inválida");
}
