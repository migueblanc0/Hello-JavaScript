// TIPOS DE DATOS PRIMITIVOS

// Cadena de texto (string)
let name = "Miguel Blanco";
let alias = "Miguezz";
let email = `miguezzblanco@gmail.com`;

// Numeros (number)
let age = 22; // Entero
let height = 1.75; // Decimal

// Boleanos (boolean)
let isStudent = true;
let isTeacher = false;

// Undefined: La variable se declaró, pero aún no tiene ningún valor
let undefinedValue;
console.log(undefinedValue);

// Null
let nullValue = null;

// Symbol: Valor único e inmutable, id's únicos
let mySymbol = Symbol("mySymbol");

// BigInt
let myBigInt = BigInt(111111111122222223333333334444444455555556666);
let myBigInt2 = 111111111122222223333333334444444455555556666n;

// Mostramos los tipos de datos
console.log(typeof name);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isStudent);
console.log(typeof isTeacher);

console.log(typeof undefinedValue);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);
