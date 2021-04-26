const colors = require('colors');
const {
  inquirerMenu,
  pausa,
  leerInput,
  listatoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDb, leerDb } = require('./helpers/guardar-archivo');

const tareas = new Tareas();

const questionNumber = async (nroQuestion) => {
  const questions = {
    1: async () => {
      const desc = await leerInput('Nombre tarea:');
      tareas.crearTarea(desc);
    },
    2: async () => {
      tareas.listadoCompleto();
      return;
    },
    3: async () => {
      tareas.listarPorEstado(true);
    },
    4: async () => {
      tareas.listarPorEstado(false);
    },
    5: async () => {
      const ids = await mostrarListadoChecklist(tareas.listadoArr);
      tareas.toggleCompletadas(ids);
    },
    6: async () => {
      const id = await listatoTareasBorrar(tareas.listadoArr);
      if (id === 0) {
        return;
      }
      const ok = await confirmar('¿Estas seguro?');
      if (ok) {
        tareas.borrarTarea(id);
        console.log('Se elimino correctamente la tarea');
      }
    },
    0: async () => {
      return;
    },
  };
  return questions[nroQuestion]();
};

const main = async () => {
  let option = '';
  const tareasDb = leerDb();
  if (tareasDb) {
    tareas.cargarTareas(tareasDb);
  }

  do {
    option = await inquirerMenu();
    await questionNumber(option);
    guardarDb(tareas._listado);
    await pausa();
  } while (option !== '0');
};

main();
