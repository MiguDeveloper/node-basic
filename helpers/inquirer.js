const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿qué desea hacer?',
    choices: [
      { value: '1', name: `${'1.'.green} Crear una tarea` },
      { value: '2', name: `${'2.'.green} Listar tarea` },
      { value: '3', name: `${'3.'.green} Listar tareas completadas` },
      { value: '4', name: `${'4.'.green} Listar tareas pendientes` },
      { value: '5', name: `${'5.'.green} Completar tarea(s)` },
      { value: '6', name: `${'6.'.green} Borrar tarea` },
      { value: '0', name: `${'0.'.green} Salir` },
    ],
  },
];

const inquirerMenu = async () => {
  console.log('\n');
  console.log('Seleccione una opción'.inverse);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const preg = [
  {
    type: 'input',
    name: 'enter',
    message: `Presione ${'ENTER'.green} para continuar`,
  },
];

const pausa = async () => {
  const enter = await inquirer.prompt(preg);
  return enter;
};

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }

        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listatoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, idx) => {
    return {
      value: tarea.id,
      name: `${(idx + 1).toString().green}. ${tarea.descripcion}`,
    };
  });

  choices.unshift({
    value: 0,
    name: `${'0'.green}. Cancelar`,
  });

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Eliminar',
      choices,
    },
  ];

  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, idx) => {
    return {
      value: tarea.id,
      name: `${(idx + 1).toString()}. ${tarea.descripcion}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const preguntas = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccione',
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(preguntas);
  return ids;
};

const showMenuClima = async () => {
  const preguntas = [
    {
      type: 'list',
      name: 'menuClima',
      message: 'Seleccione una opción',
      choices: [
        { value: 1, name: `${'1'.green}. Buscar ciudad` },
        { value: 2, name: `${'2'.green}. Historial` },
        { value: 0, name: `${'0'.green}. salir` },
      ],
    },
  ];

  console.log('\n');
  console.log('Seleccione un opción'.inverse);

  const { menuClima } = await inquirer.prompt(preguntas);
  return menuClima;
};

const listarLugares = async (lugares = []) => {
  const choices = lugares.map((lugar, idx) => ({
    value: lugar.id,
    name: `${(idx + 1).toString().green}. ${lugar.nombre}`,
  }));

  choices.unshift({
    value: 0,
    name: `${'0'.green} Cancelar`,
  });

  const preguntas = [
    {
      type: 'list',
      name: 'lugar',
      message: 'Seleccione un lugar',
      choices,
    },
  ];

  const { lugar } = await inquirer.prompt(preguntas);

  return lugar;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listatoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
  showMenuClima,
  listarLugares,
};
