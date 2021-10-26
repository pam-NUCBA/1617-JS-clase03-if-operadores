const calorias = 150;
const cal = "150";

if (calorias === cal) {
  console.log(calorias);
} else {
  console.log("no son comparables!");
}

if (calorias == cal) {
  console.log(calorias);
} else {
  console.log("no son comparables!");
}

const num1 = 155;
const num2 = 155;

//* no es lo mismo > que >=, porque > siempre va a pretender que sea mayor aunque sea en centésimas

if (num1 > num2) {
  console.log("es mayor");
} else if (num1 >= num2) {
  console.log("es mayor o igual");
} else {
  console.log("bueno, la unica opcion es que sea menor");
}
