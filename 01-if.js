//*puedo crear la variable y no darle valor todavía
let a;

//*va a dar undefined
console.log(typeof a, a);

a = 20;

//if es la condición
if (a > 20) {
    //esto es lo que hace si es true
  console.log("es mayor");
  //else if es otra condición
} else if (a < 20) {
  console.log("es menor");
  //else solo es si los if y else if dieron false
} else {
  console.log("igual");
}

//! los if pueden tener solo if y no tener else, pueden tener muchos else if, pueden no tener else pero sí muchos else if, etc.