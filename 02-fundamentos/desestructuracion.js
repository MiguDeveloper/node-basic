const persona = {
  nombre: 'Miguel',
  apellido: 'Chinchay',
  poder: 'Regeneracion',
  getData: () => {
    return `${persona.nombre} ${persona.apellido} poder: ${persona.poder}`;
  },
  // tambien podemos resumirla como getNombre(){code here}
  getNombre: function () {
    return `${this.nombre} ${this.apellido} poder: ${this.poder}`;
  },
};

console.log(persona.apellido);
console.log(persona.getNombre());
console.log(persona.getData());

//uso de la desestructuracion
const { nombre, apellido, noExiste = 0 } = persona;
console.log(nombre);
console.log(apellido);
console.log(noExiste);

// desestructuracion en el parametro
const imprimePersona = ({ nombre, apellido, poder, edad = 15 }) => {
  console.log(nombre, apellido, poder, edad);
};

imprimePersona(persona);

const usuarios = ['miguel', 'juan', 'axel', 'jose'];
const [primero, segundo] = usuarios;
const [, , tercero] = usuarios;
console.log(primero, segundo);
console.log(tercero);
