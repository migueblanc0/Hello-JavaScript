// 1. Concatena dos cadenas de texto
let mensaje1 = "Hola";
let mensaje2 = "cara de bola";
console.log("-> " + mensaje1 + " " + mensaje2);

// 2. Muestra la longitud de una cadena de texto
console.log("->mensaje1 longitud: " + mensaje1.length);

// 3. Muestra el primer y último carácter de un string
console.log("-> primer caracter: " + mensaje1[0]);
console.log("último caracter: " + mensaje1[mensaje1.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log("-> mayúsculas: " + mensaje1.toUpperCase());
console.log("mayúsculas: " + mensaje1.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let mensaje3 = `Hola
mi nombre
es Miguel`;
console.log("-> varias líneas: " + mensaje3);

// 6. Interpola el valor de una variable en un string
console.log(
  `-> interpolando: Te saludo, ${mensaje1} me parece que eres un ${mensaje2}`
);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("-> espacios por guiones: " + mensaje2.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("-> string contiene Benito?: " + mensaje1.includes("Benito"));

// 9. Comprueba si dos strings son iguales
console.log("-> 2 strings iguales?: " + (mensaje1 === mensaje2));

// 10. Comprueba si dos strings tienen la misma longitud
console.log(
  "-> 2 strings misma longitud?" + (mensaje1.length == mensaje2.length)
);
