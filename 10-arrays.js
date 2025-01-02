// Declaración
let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicialización
myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["Miguel", "Blanco", "Miguezz", 22, true];
myArray2 = new Array("Miguel", "Blanco", "Miguezz", 22, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[2] = "Miguel";
//myArray2[0] = "Blanco";
myArray2[1] = "Miguezz";
myArray2[4] = "Miguezz";
console.log(myArray2);

myArray = [];
myArray[2] = "Miguel";
//myArray[0] = "Blanco";
myArray[1] = "Miguezz";
console.log(myArray);

// Métodos comunes
myArray = [];

// Push y Pop
myArray.push("Migue");
myArray.push("Blanc");
myArray.push("Miguezzb");
myArray.push(37);
console.log(myArray);

console.log(myArray.pop()); // Elimina el último y lo devuelve
myArray.pop();
console.log(myArray);

// Shift & Unshift
myArray.shift(); // Elimina el 1er elemento
console.log(myArray);

myArray.unshift("Migue", "Miguezzb"); // Agrega 1 o más elementos al principio
console.log(myArray);

// Lenght
console.log(myArray.length);

// Clear
myArray = ["Miguel", "Blanco", "Miguezz", 22, true];
myArray.length = 0; // Alternativa
console.log(myArray);

// Slice
myArray.push("Miguel", "Blanco", "Miguezz", 22, true);
let myNumArray = myArray.slice(1, 3);
console.log(myArray);
console.log(myNumArray);

// Splice
myArray.splice(1, 3); // Elimina desde el elemento X al N
console.log(myArray);

myArray = ["Miguel", "Blanco", "Miguezz", 22, true];
myArray.splice(1, 2, "Nueva entrada"); // Nos cargamos 3 elementos, apartir del índice 1 y metemos un elemento nuevo
console.log(myArray);
