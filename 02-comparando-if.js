//* aca inicializamos, hay que usar el let
let a = "a";
let b = "b";

if (a < b) {
  console.log(`${a} es menor a ${b}`);
} else if (a > b) {
  console.log(`${a} es mayor a ${b}`);
} else {
  console.log(`${a} es igual a ${b}`);
}

//* aca reasignamos, no necesitamos el let
a = 9;
b = 9;

if (a < b) {
  console.log(`${a} es menor a ${b}`);
} else if (a > b) {
  console.log(`${a} es mayor a ${b}`);
} else {
  console.log(`${a} es igual a ${b}`);
}

