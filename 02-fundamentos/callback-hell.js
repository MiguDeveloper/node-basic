const empleados = [
  { id: 1, nombre: 'Miguel' },
  { id: 2, nombre: 'Juan' },
  { id: 3, nombre: 'Jose' },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 1000 },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((empleado) => empleado.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((salario) => salario.id === id);
  if (salario) {
    callback(null, salario);
  } else {
    callback(`El ID: ${id} de salario no existe`);
  }
};

const id = 1;
getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log('ERROR');
    return console.log(err);
  }

  console.log('OK');
  console.log(empleado.nombre);

  getSalario(id, (err, salario) => {
    if (err) {
      console.log('ERROR');
      return console.log(err);
    }
    console.log('OK');
    console.log(
      `el empleado ${empleado.nombre} tiene un salario de: ${salario.salario}`
    );
  });
});
