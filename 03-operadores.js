//*https://www.w3schools.com/js/js_operators.asp

//*podemos incrementar 1:
let num = 5;
num++;
console.log(num);

//*si no voy a usar el num++, tengo que primero hacer esto, como si reasignara el valor:
//* incrementar != sumar
num = num + 1;
console.log(num);

//*y acá lo mismo
num--;
console.log(num);

num = num - 1;
console.log(num);

//*podemos usar operadores de asignación:
//esto es igual a num = num + 15
num += 15;
console.log(num);

num *= 2;
console.log(num);

num -= 4;
console.log(num);

num /= 6;
console.log(num);

//*el resto nos da lo que queda sobrando en la división
num %= 2;
console.log(num);

console.log("resto entre 9 y 5", 9 % 5);

//*si queremos sacar par o impar usamos el 2, pero el resto puede ir con cualquier cosa

//* ** es potencia
//* sería igual a poner num = num ** 3
num = 3;
num **= 3;
console.log(num);
