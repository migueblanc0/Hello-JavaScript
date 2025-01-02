// Declaración

let myMap = new Map();
console.log(myMap);

// Inicialización
myMap = new Map([
  ["name", "Miguel"],
  ["email", "miguezzblanco@gmail.com"],
  ["edad", "22"],
]);
console.log(myMap);

// Métodos y Propiedades

// Set (actualiza o agrega elementos)
myMap.set("alias", "miguezz");
console.log(myMap);

myMap.set("edad", "23");
console.log(myMap);

// Get (recuperar valores)
console.log(myMap.get("alias"));

// Has
console.log(myMap.has("alias"));

// Delete
myMap.delete("alias");
console.log(myMap);

// Keys, Values & Entries
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// Size
console.log(myMap.size);

// Clear
myMap.clear();
console.log(myMap);

console.log(myMap.keys());
