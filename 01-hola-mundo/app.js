let nombre = 'Miguel';
console.log(nombre);

nombre = 'Angel';
console.log(nombre);

const saludar = (nombre) => {
  return `Hola estimado ${nombre}`;
};

console.log(saludar(nombre));

console.log('inicio');
setTimeout(() => {
  console.log('primer timeout');
}, 3000);
setTimeout(() => {
  console.log('segundo timeout');
}, 0);
setTimeout(() => {
  console.log('tercero timeout');
}, 0);
console.log('fin');
