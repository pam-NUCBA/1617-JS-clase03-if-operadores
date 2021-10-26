// = asignacion
// == comparación
// === comparacion estricta

//*comparaciones

let num = 15;
let numStr = "15";
let num2 = 16;

//*triple es estricto
if (num === numStr) {
    // si pongo === es estrictamente igual: tipo Y valor
  console.log(
    `num es igual a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
  // si pongo !== es estrictamente distinto
} else if (num !== numStr) {
  console.log(
    `num es distinto a numStr porque ${typeof num} no es igual a ${typeof numStr}`
  );
} else {
  //jamás va a entrar
  console.log(`che, qué hacés acá`);
}

//*doble solo compara los valores, pero no los tipos
if (num == numStr) {
  console.log(`num es igual a numStr porque ${num} es igual a ${numStr}`);
} else {
  console.log(`num es distinto a numStr porque ${num} no es igual a ${numStr}`);
}

