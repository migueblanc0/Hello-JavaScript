// 1. Crea una variable para cada operación aritmética
let val1 = 1;
let val2 = 2;

let suma = val1 + val2;
let resta = val1 - val2;
let multiplicacion = val1 * val2;
let division = val1 / val2;
let modulo = val1 % val2;
let exponente = val1 ** val2;

let valor = 5;
valor++;
console.log("Valor incrementado: ", valor);
valor--;
console.log("Valor decrementado: ", valor);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let igual = suma;
suma += 2;
suma -= 2;
let multiplicoSuma = (suma *= 2);
let dividoSuma = (suma /= 2);
let moduloSuma = (suma %= 2);
let exponenteSuma = (suma **= 2);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let valor1 = 5;
let valor2 = 6;

console.log(!(valor1 > valor2));
console.log(valor1 < valor2);
console.log(!(valor1 >= valor2));
console.log(valor1 <= valor2);
console.log(valor1 != valor2);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(valor1 > valor2);
console.log(valor1 >= valor2);
console.log(valor2 < valor1);
console.log(valor2 <= valor1);
console.log(valor1 === "valor2");

// 5. Utiliza el operador lógico and
console.log(valor1 < valor2 && valor2 > valor1);

// 6. Utiliza el operador lógico or
console.log(valor1 > valor2 || valor2 > valor1);

// 7. Combina ambos operadores lógicos
console.log((valor1 < valor2 && valor2 > valor1) || valor2 >= valor1);

// 8. Añade alguna negación
console.log(!(valor1 < valor2 && valor2 > valor1) || valor2 >= valor1);

// 9. Utiliza el operador ternario
let itsHot = true;
itsHot ? console.log("Hace calor") : console.log("No hace calor");

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(
  valor1 + valor2 > valor2 + valor1 || valor1 + valor2 >= valor2 + valor1
);
