const empleados = [
  { id: 1, nombre: 'Miguel' },
  { id: 2, nombre: 'Juan' },
  { id: 3, nombre: 'Jose' },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 1000 },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((empleado) => empleado.id === id);
    empleado
      ? resolve(getSalario(id))
      : reject(`El ID de empleado ${id} no es correcto`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((salario) => salario.id === id);
    salario
      ? resolve(salario)
      : reject(`El ID de salario ${id} no es correcto`);
  });
};

const id = 3;
getEmpleado(id)
  .then((resp) => resp)
  .then((salario) =>
    console.log(`El empleado tiene un salario de ${salario.salario}`)
  )
  .catch((err) => console.log(err));
