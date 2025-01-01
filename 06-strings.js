// Concatenación
let myName = "Miguel";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[12]);

// Métodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("Miguel"));
console.log(greeting.indexOf("Brais"));
console.log(greeting.includes("Hola"));
console.log(greeting.includes("Miguel"));
console.log(greeting.includes("Brais"));
console.log(greeting.slice(0, 10));
console.log(greeting.replace("Miguel", "Miguezz"));

// Template literals (plantillas literales)

let mensaje = `Hola este es mi 
curso 
de JavaScript`;
console.log(mensaje);

let email = "miguezz@gmail.com";

console.log(`Hola, ${myName}! Tu email es ${email}`);
