// If, else if, else

// If (si)
let age = 22;

if (age == 22) {
  console.log("La edad es 22");
}

// Else (si no)
if (age == 22) {
  console.log("La edad es 22");
} else {
  console.log("La edad no es 22");
}

// Else if (si no, si0)
if (age == 22) {
  console.log("La edad es 22");
} else if (age < 18) {
  console.log("Es menor de edad");
} else {
  console.log("La edad no es 22 y es mayor de edad");
}

// Operadores ternarios
const message = age == 22 ? "La edad es 22" : "La edad no es 22";
console.log(message);

// Switch
let day = 9;
let dayName;

switch (day) {
  case 0:
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miércoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sábado";
    break;
  case 6:
    dayName = "Domingo";
    break;
  default:
    dayName = "incorrecto";
}
console.log(`El día de hoy es ${dayName}`);
