// 1. Escribe un comentario en una línea
// Este es un comentario en una sola línea

// 2. Escribe un comentario en varias líneas
/*  Este es un comentario 
    en varias líneas
    ya que no uso comentarios
    individuales
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let elString = "Hola String";
let elNumberInt = 11;
let elNumberDecimal = 1.11;
let elBoleano = false;
let elUndefined;
let elNull = null;
let elBigInt1 = BigInt(111112222233333444445555566666777778888899999);
let elBigInt2 = 111112222233333444445555566666777778888899999n;

// 4. Imprime por consola el valor de todas las variables
console.log(elString);
console.log(elNumberInt);
console.log(elNumberDecimal);
console.log(elBoleano);
console.log(elUndefined);
console.log(elNull);
console.log(elBigInt1);
console.log(elBigInt2);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof elString);
console.log(typeof elNumberInt);
console.log(typeof elNumberDecimal);
console.log(typeof elBoleano);
console.log(typeof elUndefined);
console.log(typeof elNull);
console.log(typeof elBigInt1);
console.log(typeof elBigInt2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
let undefined2;
let null2 = null;

elString = "Hola String 2";
elNumberInt = 6;
elNumberDecimal = 1.76;
elBoleano = true;
elUndefined = undefined2;
elNull = null2;
elBigInt1 = BigInt(222223333344444555556666677777888889999900000);
elBigInt2 = 222223333344444555556666677777888889999900000n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
elString = 7;
elNumberInt = "Hola String 3";
elNumberDecimal = true;
elBoleano = null;
elUndefined = 1.9;
elNull = false;
elBigInt1 = null2;
elBigInt2 = undefined2;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const elString3 = "Hola String 3";
const elNumberIntt3 = 3;
const elNumberDecimal3 = 3.33;
const elBolean3 = true;
const elUndefined3 = undefined;
const elNull3 = null;
const elBigInt3 = BigInt(111112222233333444445555566666777778888899999);
const elBigInt33 = 111112222233333444445555566666777778888899999n;

// 9. A continuación, modifica los valores de las constantes
//elString3 = "Hola String 44";
//elNumberIntt3 = 44;
//elNumberDecimal3 = 4.44;
//elBolean3 = false;
//elUndefined3 = 4;
//elNull3 = 4;
//elBigInt3 = BigInt(111112222233333444445555566666777778888899999111112222233333444445555566666777778888899999);
//elBigInt33 = 111112222233333444445555566666777778888899999111112222233333444445555566666777778888899999n;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Listo, las líneas comentadas fueron las que modificaban a las constantes.
