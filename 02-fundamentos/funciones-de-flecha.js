function sumar(a, b) {
  return a + b;
}

console.log(sumar(2, 4));

// las funciones de flecha no manipulan a lo que apunta el this
const nuevoSumar = (a, b) => {
  return a + b;
};

console.log(nuevoSumar(2, 5));
