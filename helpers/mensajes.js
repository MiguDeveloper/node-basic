const colors = require('colors');

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.log('\n');
    console.log('Seleccione una opción'.inverse);
    console.log(`${'1'.green}. Crear una tarea`);
    console.log(`${'2'.green}. Listar tarea`);
    console.log(`${'3'.green}. Listar tareas completadas`);
    console.log(`${'4'.green}. Listar tareas pendientes`);
    console.log(`${'5'.green}. Completar tarea(s)`);
    console.log(`${'6'.green}. Borrar tarea`);
    console.log(`${'0'.green}. Salir`);
    console.log('\n');

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('seleccione una opción: ', (rpta) => {
      readline.close();
      resolve(rpta);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\n Presione ${'ENTER'.green} para continuar`, (rpta) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = { mostrarMenu, pausa };
