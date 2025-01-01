// Operadores

// Operadoes aritméticos
let a = 5;
let b = 10;
console.log(a + b); //Suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicación
console.log(a / b); //División

console.log(a % b); //Modulo
console.log(a ** b); //Exponente

a++; //Incremento
console.log(a);

b--; //Decremento
console.log(b);

// Operadores de asignación
let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// Operadores de comparación
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 5);
console.log(a == 6); //Aquí comparo el valor después de convertirlo
console.log(a === 6); //Aquí comparo tanto el valor como el tipo
console.log(a != 6);
console.log(a !== "6");
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "");
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);

// Truthy Values (Valores verdaderos)
// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy Values (Valores falsos)
// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías

// Operadores Lógicos
// and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);

// or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 || 15 > 20 || 30 > 40);
console.log((5 > 10 && 15 > 20) || 30 < 40);

// not (!)
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

// Operadores Ternarios
const isRaining = false;

isRaining ? console.log("Está lloviendo") : console.log("!(Está lloviendo)");
