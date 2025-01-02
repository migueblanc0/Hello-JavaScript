// 1. Crea un array que almacene cinco animales
let zoo = [4];
zoo = ["León", "Cebra", "Pinguino", "Hipopótamo", "Girafa"];

// 2. Añade dos más. Uno al principio y otro al final
zoo.unshift("Orangután");
zoo.push("Castor");

// 3. Elimina el que se encuentra en tercera posición
zoo.splice(3, 1);

// 4. Crea un set que almacene cinco libros
let libros = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"]);

// 5. Añade dos más. Uno de ellos repetido
libros.add("Libro6");
libros.add("Libro5");

// 6. Elimina uno concreto a tu elección
libros.delete("Libro1");

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map();
meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5));
console.log("-> Valor (5) de meses: " + meses.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let mesesVerano = [];
mesesVerano = ["Junio", "Julio", "Agosto"];
meses.set("mesesVerano", mesesVerano);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayNuevo = ["Hola"];
console.log(arrayNuevo);

let setNuevo = new Set(arrayNuevo);
console.log(setNuevo);

let mapNuevo = new Map();
mapNuevo = new Map([["Set", setNuevo]]);
console.log(mapNuevo.entries());
