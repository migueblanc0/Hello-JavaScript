// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Miguel";
let variable = 152;

variable === 152
  ? console.log(`Tu nombre es ${myName}`)
  : console.log(`Pues no pasó nada car`);

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "miguezzb";
let pass = "1521";

user === "miguezzb" && pass === "1521"
  ? console.log(`!Bienvenido usuario ${user}¡`)
  : console.log(`Error mi car`);

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0;

if (numero > 0) {
  console.log("El número es > a 0 mi car");
} else if (numero < 0) {
  console.log("El número es < a 0 mi car");
} else {
  console.log("El número es 0 mi car");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edadActual = 18;

if (edadActual >= 18) {
  console.log("Adelante mi car, puedes votar");
} else if (edadActual < 18 && edadActual > 0) {
  let edadFaltante = 18 - edadActual;
  console.log(`Todavía no car, te faltan ${edadFaltante} años para votar`);
} else {
  console.log("Primero nace mi car, luego votas papi");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edad2 = 9;
let valor = "";

edad2 >= 18
  ? ((valor = "adulto"), console.log(`Tu valor es ${valor}`))
  : ((valor = "menor"), console.log(`Tu valor es ${valor}`));

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 12;

if (mes == 12 || mes == 1 || mes == 2) {
  console.log("La estación actual es Invierno");
} else if (mes >= 3 && mes <= 5) {
  console.log("La estación actual es Primavera");
} else if (mes >= 6 && mes <= 8) {
  console.log("La estación actual es Verano");
} else if (mes >= 9 && mes <= 11) {
  console.log("La estación actual es Otoño");
} else {
  console.log("Ese mes no existe wacho");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 1) {
  console.log(`El mes ${mes} tiene 31 días`);
} else if (mes == 2) {
  console.log(`El mes ${mes} tiene 28 días`);
} else if (mes == 3) {
  console.log(`El mes ${mes} tiene 31 días`);
} else if (mes == 4) {
  console.log(`El mes ${mes} tiene 30 días`);
} else if (mes == 5) {
  console.log(`El mes ${mes} tiene 31 días`);
} else if (mes == 6) {
  console.log(`El mes ${mes} tiene 30 días`);
} else if (mes == 7) {
  console.log(`El mes ${mes} tiene 31 días`);
} else if (mes == 8) {
  console.log(`El mes ${mes} tiene 31 días`);
} else if (mes == 9) {
  console.log(`El mes ${mes} tiene 30 días`);
} else if (mes == 10) {
  console.log(`El mes ${mes} tiene 31 días`);
} else if (mes == 11) {
  console.log(`El mes ${mes} tiene 30 días`);
} else if (mes == 12) {
  console.log(`El mes ${mes} tiene 31 días`);
} else {
  console.log(`Ese mes no existe wacho x2`);
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "arabic";

switch (idioma) {
  case "español":
    console.log("Hola wacho");
    break;
  case "english":
    console.log("Hi wacho");
    break;
  case "arabic":
    console.log("مرحبا واتشو");
    break;
  case "chinese":
    console.log("你好瓦乔");
    break;
  case "zulu":
    console.log("sawubona wacho");
    break;
  default:
    console.log("No pude wacho");
    break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case 1:
    console.log("La estación actual es Invierno x2");
    break;
  case 2:
    console.log("La estación actual es Invierno x2");
    break;
  case 3:
    console.log("La estación actual es Primavera x2");
    break;
  case 4:
    console.log("La estación actual es Primavera x2");
    break;
  case 5:
    console.log("La estación actual es Primavera x2");
    break;
  case 6:
    console.log("La estación actual es Verano x2");
    break;
  case 7:
    console.log("La estación actual es Verano x2");
    break;
  case 8:
    console.log("La estación actual es Verano x2");
    break;
  case 9:
    console.log("La estación actual es Otoño x2");
    break;
  case 10:
    console.log("La estación actual es Otoño x2");
    break;
  case 11:
    console.log("La estación actual es Otoño x2");
    break;
  case 12:
    console.log("La estación actual es Invierno x2");
    break;
  default:
    console.log("Ese mes no existe wacho x3");
    break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case 1:
    console.log(`El mes ${mes} tiene 31 días x2`);
    break;
  case 2:
    console.log(`El mes ${mes} tiene 28 días x2`);
    break;
  case 3:
    console.log(`El mes ${mes} tiene 31 días x2`);
    break;
  case 4:
    console.log(`El mes ${mes} tiene 30 días x2`);
    break;
  case 5:
    console.log(`El mes ${mes} tiene 31 días x2`);
    break;
  case 6:
    console.log(`El mes ${mes} tiene 30 días x2`);
    break;
  case 7:
    console.log(`El mes ${mes} tiene 31 días x2`);
    break;
  case 8:
    console.log(`El mes ${mes} tiene 31 días x2`);
    break;
  case 9:
    console.log(`El mes ${mes} tiene 30 días x2`);
    break;
  case 10:
    console.log(`El mes ${mes} tiene 31 días x2`);
    break;
  case 11:
    console.log(`El mes ${mes} tiene 30 días x2`);
    break;
  case 12:
    console.log(`El mes ${mes} tiene 31 días x2`);
    break;
  default:
    console.log("Ese mes no existe wacho x4");
    break;
}
