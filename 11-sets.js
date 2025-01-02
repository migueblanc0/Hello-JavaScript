// Declaración
let mySet = new Set();

// Inicialización
mySet = new Set([
  "Miguel",
  "Blanco",
  "Miguezz",
  22,
  true,
  "miguezzblanco@gmail.com",
  "Hola",
]);
console.log(mySet);

// Métodos comunes

// Add & Delete
mySet.add("Brais");
console.log(mySet);

console.log(mySet.delete("Brais"));
console.log(mySet.delete(900));

console.log(mySet);

// Has
console.log(mySet.has("Miguel"));
console.log(mySet.has("Mouredev"));

// Size
console.log(mySet.size);

// Convertir un Set -> Array
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un Array -> Set
myNewNewSet = new Set(myArray);
console.log(myNewNewSet);

// LOS SETS NO ADMITEN DUPLICADOS
mySet.add("Miguel");
mySet.add("Miguel");
mySet.add("Miguel");
console.log(mySet);
