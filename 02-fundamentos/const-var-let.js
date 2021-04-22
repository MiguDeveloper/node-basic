// var siempre es de ambito global
var nombre = 'Miguel';
// let es dependiendo del ambito
let apellido = 'Chinchay';

if (nombre) {
  var nombre = 'Magneto';
  let apellido = 'Huarcaya';
}

console.log(nombre);
// otra cosa importante es cuando borramos la declaracion de la
// variable, ahi si podemos acceder
if (apellido) {
  apellido = 'Cambiamos apellido';
}
console.log(nombre);
console.log(apellido);

// las const son mas ligeras que las variables creadas con let
const valor = 'este es su valor';
